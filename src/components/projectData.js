export const projectData = {
    'fea-camera-bracket': {
        title: 'Margin-Under-Uncertainty FEA: Robot Camera Bracket',
        tagline: 'From "passes a stress check" to "provably holds a system-level alignment requirement under real robot motion."',
        tags: ['Ansys Mechanical', 'SolidWorks', 'Parametric DOE', 'Structural FEA'],
        sections: [
            {
                content: [
                    {type: 'text', value: "Most FEA projects you see stop at \"peak stress is below yield, so the part is safe.\" I've always thought that answers the wrong question. In the real world, a part almost never fails by snapping, it fails by not doing its job in the biggest system. So I wanted a project that connected a structural result to an actual system requirement, and carried the uncertainty all the way through to a real margin, the way operating-margin decisions actually get made on hardware that matters."},
                    {type: 'text', value: "The part itself is deliberately boring: a simple L-bracket that holds a machine-vision camera on a robot wrist. That's on purpose. The whole point is the method, not the geometry, and a simple part keeps every engineering decision out in the open instead of buried in complicated CAD."},
                ],
            },
            {
                heading: 'The Problem',
                content: [
                    {type: 'text', value: "A machine-vision camera has to stay pointed exactly where it's calibrated, or the whole vision system drifts out of alignment. So the real requirement isn't \"don't break, \" it's \"don't move more than 30 microns of shift or 0.1 degrees of tilt,\" with a 1.5 safety factor on top."},
                    {type: 'text', value: "That reframes everything. This bracket never comes anywhere close to yielding, the factor of safety on stress is something like 50 to 100. So this was never a strength problem. It's a stiffness problem. The question is whether it stays rigid enough to hold that alignment."},
                    {type: 'text', value: "And here's why that's harder than it sounds: the camera doesn't sit flush against the bracket. It's a chunky thing, so its mass effectively hangs about 50 mm out from the upright face, up near the top. When the robot arm accelerates, that mass on a lever arm bends the upright at its base. Sitting still it's fine. The moment the arm moves fast, it's a different story."},
                    {type: 'schematic'},
                ],
            },
            {
                heading: 'Verifying the model, before trusting a single number', 
                content: [
                    {type: 'text', value: "Before I believed any result, I checked the model two ways. First, a mesh convergence study. I ran it at 7.25 mm, 4 mm, and 2 mm element sizes and watched the peak deflection settle down, with that last step moving less than 1 percent. So I took the 2 mm mesh (about 114,000 nodes) as converged, and I wrote that leftover 1 percent down as an explicit line in my uncertainty budget. The whole study runs on FEA data, so the FEA's own discretization error has to be accounted for, not swept under the rug."},
                    {type: 'table', headers:['Element Size', 'Peak Deflection', 'Change'], rows:[
                        ['7.25 mm', '21.07 µm', '-'],
                        ['4 mm', '21.44 µm', '+1.8%'],
                        ['2 mm', '21.60 µm', '+0.75%'],
                    ]},
                    {type: 'text', value: "Second, I checked it against physics. Cantilever bending says deflection scales with 1 over thickness cubed, and when I swept the wall thickness, the FEA followed that law to within 0.4 percent. That told me the model was behaving like real beam theory, not just producing plausible-looking numbers that happen to be wrong."},   
                ],
            },
            {
                heading: 'Finding out what actually matters',
                content: [
                    {type: 'text', value: "Then I wanted to know which inputs actually move the needle, so I parametrized the wall thickness in CAD and ran a design sweep, plus single-variable studies on everything else. The ranking was clear: robot acceleration dominates, then camera payload, then how far the camera sticks out, then wall thickness, with material and mesh error trailing. Knowing acceleration was the big lever is what pointed me straight at the real failure mode."},
                    {type: 'table', headers: ['Contributor', 'Effect on shift'], rows: [
                        ['Robot Acceleration', '+12.2 µm per g (dominant)'],
                        ['Camera Payload', '+3.1 µm per +0.1 kg'],
                        ['Mounting Offset', '+3.75 µm per +15 mm'],
                        ['Wall Thickness', '±0.89 µm per ±0.1 mm'],
                        ['Material Modulus', '+0.25 µm per -2%'],
                        ['FEA Discretization', '~1%'],
                    ]},
                ],
            },
            {
                heading: 'Where it breaks: robot motion',
                content: [
                    { type: 'text', value: "Sitting still at 1g, the bracket passes comfortably, 12.49 µm of shift, well inside the 30 µm budget even with the safety factor. But an eye-in-hand camera rides along with the arm, and the arm accelerates. Once I treated that acceleration as a load, the picture flipped." },
                    { type: 'image', src: 'fea-deformation.png', caption: 'Total deformation at load. The upright deflects most at the top, right where the camera mounts.' },
                    { type: 'table', headers: ['Case', 'Shift', '× FoS 1.5', 'vs 30 µm budget'], rows: [
                        ['Nominal 1g', '12.49 µm', '18.7 µm', 'pass'],
                        ['Robot 2g', '24.38 µm', '36.6 µm', 'fail'],
                        ['Robot 3g', '36.57 µm', '54.9 µm', 'fail, +83%'],
                    ]},
                    { type: 'text', value: "Tilt stayed fine in every case, so shift was the governing requirement and acceleration was the governing load. The bracket is perfectly safe at rest and fails the instant the arm moves quickly. That's exactly the kind of thing a plain stress check would never catch." },
                ],
            },
            {
                heading: 'Fixing it the right way',
                content: [
                    { type: 'text', value: "The failure gave me a precise target: to pass the 3g case at the safety factor, deflection had to drop to 55 percent of what it was, a 1.83x stiffness improvement. I could have just thickened the wall, but that adds mass, and mass on a robot wrist is exactly what you don't want, it eats into payload and slows the arm's response." },
                    { type: 'text', value: "So instead I moved material to where the bending actually concentrates. The baseline showed the highest strain right at the inner corner where the upright meets the foot, so I added three triangular gussets there, then thinned the upright from 4 mm to 3 mm to win back the mass I'd added. That's the classic stiffness-efficient move: pull material out of the over-built regions and put it where it braces the load path." },
                    { type: 'image', src: 'fea-cad-redesign.png', caption: 'The redesign: three triangular gussets bracing the corner, with a thinned upright to stay mass-neutral.' },
                    { type: 'text', value: "I also deliberately didn't add lightening holes to the gussets. The few grams weren't worth the extra machining and inspection, so I reclaimed mass by thinning the wall instead, which costs nothing to manufacture. Weighing manufacturability against marginal weight savings is part of the design, not an afterthought." },
                ],
            },
            {
                heading: 'The result',
                content: [
                    { type: 'image', src: 'fea-plot.png', caption: 'The whole argument in one plot: original vs redesign across load cases, with tolerance whiskers and the pass / FoS-reserve / fail zones shaded.' },
                    { type: 'table', headers: ['', 'Shift at 3g', '× FoS 1.5', 'vs budget', 'Mass'], rows: [
                        ['Original', '36.57 µm', '54.9 µm', 'fail, +83%', '177.4 g'],
                        ['Redesign', '16.36 µm', '24.5 µm', 'pass, +0.22 margin', '182.3 g'],
                    ]},
                    { type: 'text', value: "The redesign passes the 3g case the original failed, a 2.24x stiffness improvement, for only 2.8 percent more mass. And it's right-sized, not over-built: it clears the requirement at the safety factor with a sensible margin, instead of carrying stiffness (and weight) it doesn't need." },
                ],
            },
            {
                heading: 'Being honest about the limits',
                content: [
                    { type: 'text', value: "A few things I'd flag if someone asked. The mounting interface is modeled as perfectly fixed, but a real bolted joint has a little give, so the actual part deflects slightly more than I predict. The acceleration is treated as a static g-load; real dynamic response (resonance) is a separate question, and the natural next step is a modal analysis. And for a bracket that sees millions of acceleration cycles, fatigue, not static deflection, is the real long-term failure mode, so a fatigue-life estimate is where this goes next." },
                ],
            },
            {
                heading: 'The through-line',
                content: [
                    { type: 'text', value: "This is basically the structural version of the operating-margin work I did at Fresenius, where I characterized a design change against its operating-window limits with a safety factor on top, using measured data. Here the data comes from FEA instead of experiment, but the discipline is identical: define the requirement, quantify the uncertainty, apply a margin, and prove the design holds." },
                ],
            },
        ],
    },
    'rom-oscillating-cylinder': {
    title: "Can a Surrogate Model Predict Flow It's Never Seen?",
    tagline: "Three ways to replace expensive CFD with machine learning, and the one question that separates the methods that work from the ones that fall apart.",
    tags: ['OpenFOAM', 'PyTorch', 'PINNs', 'Neural ODEs', 'VAE', 'Reduced-Order Modeling'],
    github: 'https://github.com/roopa0912/cylinder_flow_ml',
    sections: [
      {
        content: [
          { type: 'text', value: "A single CFD simulation of flow past an oscillating cylinder takes me somewhere between 30 minutes and 2 hours. That's fine if you need one. But the whole point of simulation in industry is to explore, sweep a design space, quantify uncertainty, run an optimization loop, and that means hundreds or thousands of runs. At that point CFD just isn't practical." },
          { type: 'text', value: "So the idea behind surrogate modeling is simple: run a handful of real CFD simulations, let a machine learning model learn the essential dynamics, and then have it predict new flow states orders of magnitude faster. The question I actually cared about, though, is the one people tend to skip: can a surrogate predict flow at conditions it was never trained on? Because that's the whole reason you'd build one. And it turns out that's exactly where these methods either hold up or completely fall apart." },
        ],
      },
      {
        heading: 'The setup',
        content: [
          { type: 'text', value: "I used flow past a cylinder that oscillates up and down at Re = 100, a classic unsteady problem with vortex shedding, simulated in OpenFOAM with a moving mesh. Then I built three different surrogate models and trained all of them on the exact same CFD data, so the comparison would be fair." },
          { type: 'schematic', name: 'cylinder-domain' },
          { type: 'text', value: "The trick was in how I split the data. I trained on two oscillation frequencies, 0.1 Hz and 0.3 Hz, and then tested every method on a third frequency in between, 0.2 Hz, that none of them ever saw during training. That \"unseen middle\" is the real test: can the model interpolate to a new operating condition, or has it just memorized the two it was shown?" },
        ],
      },
      {
        heading: 'The three methods, in plain terms',
        content: [
          { type: 'text', value: "Each method embeds the physics in a different way, and that difference is the whole story." },
          { type: 'table', headers: ['Method', 'The idea in one line'], rows: [
            ['PINN', 'Bakes the Navier-Stokes equations straight into the loss function, so the network is penalized for being unphysical. No dimensionality reduction.'],
            ['NODE + POD', 'Compresses the flow into a few "modes" with POD (a linear technique), then learns the time dynamics in that compressed space with a Neural ODE.'],
            ['NODE + VAE', 'Same idea, but compresses with a VAE (a nonlinear neural network) instead of linear POD.'],
          ]},
          { type: 'text', value: "The POD and VAE methods are really the same recipe, compress, then learn the dynamics, with one crucial difference: POD compresses linearly, VAE compresses nonlinearly. That one distinction is what the whole result hinges on." },
        ],
      },
      {
        heading: 'On the training data, everything looked great',
        content: [
          { type: 'text', value: "Here's the trap. On the two frequencies the models were trained on, all three methods looked good. NODE+VAE was the best (1 to 2% error, R-squared above 0.999), NODE+POD was solid and consistent (~5%), and the PINN was decent though a bit inconsistent between frequencies. If I'd stopped here, I'd have concluded all three basically work." },
          { type: 'image', src: 'rom-vae-train.png', caption: 'VAE surrogate on a training frequency (0.3 Hz). Top: the real CFD. Middle: the model prediction. Bottom: the error between them, whiter is better. On training data, the error strip is nearly empty.' },
          { type: 'text', value: "But training accuracy is exactly the thing that lulls you into a false sense of security. The real question was the unseen frequency." },
        ],
      },
      {
        heading: 'Where POD falls off a cliff',
        content: [
          { type: 'text', value: "On the unseen 0.2 Hz, NODE+POD didn't just get worse, it failed catastrophically. 101% mean error and a negative R-squared, which means its predictions were literally worse than if you'd just guessed the average flow everywhere. The predicted wake bore no resemblance to reality." },
          { type: 'image', src: 'rom-pod-fail.png', caption: 'NODE+POD on the unseen 0.2 Hz. The predicted field (bottom row) has nothing to do with the real CFD (top row). 101% error.' },
          { type: 'text', value: "And I could see exactly why. When you take the flow at the unseen frequency and project it onto the POD modes learned from the other two, the resulting coefficients fly way outside anything the Neural ODE saw in training. The dynamics model was asked to extrapolate into territory it never learned, so it produced garbage." },
          { type: 'image', src: 'rom-pod-coeffs.png', caption: 'The POD coefficients tell the story: the Neural ODE prediction (red dashed) diverges completely from the true values (blue). It is extrapolating outside its training distribution.' },
          { type: 'text', value: "This is the core lesson: linear POD can't represent flows that live on a nonlinear manifold in parameter space. The moment you ask it to interpolate between operating conditions, the linearity breaks it." },
        ],
      },
      {
        heading: 'The fix: encode nonlinearly',
        content: [
          { type: 'text', value: "This is what motivated the VAE. Instead of POD's rigid linear projection, a VAE learns a nonlinear mapping into its compressed space, and it's regularized (that's the \"variational\" part) to keep that space smooth and continuous, with no holes. The intuition is that interpolating between training points should pass through valid flow states, not fall off the manifold." },
          { type: 'text', value: "It worked. On the same unseen 0.2 Hz, NODE+VAE brought the error from 101% down to 25%, a 4x improvement, and the R-squared went from negative all the way up to 0.87. The predictions actually mean something now: the wake structure and the general vortex dynamics come through, even if it's not perfect." },
          { type: 'image', src: 'rom-vae-unseen.png', caption: 'NODE+VAE on the same unseen 0.2 Hz. The prediction (middle) now recovers the real wake structure (top), with error (bottom) far smaller than POD.' },
          { type: 'text', value: "Here's the whole comparison in one plot, and you can see the POD spike towering over everything else, that's the catastrophic failure, next to the methods that actually held up." },
          { type: 'image', src: 'rom-comparison-plot.png', caption: 'Mean relative error across every method and frequency. The lone 101.7% bar is POD collapsing on the unseen frequency; everything else stays far lower.' },
          { type: 'table', headers: ['Method', '0.1 Hz (train)', '0.3 Hz (train)', '0.2 Hz (unseen)'], rows: [
            ['PINN', '3.86%', '10.62%', '18.80%'],
            ['NODE + POD', '5.65%', '4.77%', '101.73%'],
            ['NODE + VAE', '2.08%', '1.32%', '25.08%'],
          ]},
        ],
      },
      {
        heading: 'Being honest: interpolation is genuinely hard',
        content: [
          { type: 'text', value: "I want to be straight about this: even the best method still has 25% error on the unseen frequency. That's not a solved problem, that's a \"meaningfully better, but there's real work left\" result. And that honesty is kind of the point of the whole study." },
          { type: 'text', value: "Part of why it's so hard is physical: near certain frequencies the cylinder wake \"locks in\" and changes behavior qualitatively, not just quantitatively, and with only two training frequencies, the models have limited information about how the flow morphs as you change the oscillation. More training frequencies would almost certainly help, but every one of those costs a full CFD run, which is exactly the expense we're trying to avoid. That tradeoff is the real engineering decision." },
        ],
      },
      {
        heading: 'Why bother, though? The speedup',
        content: [
          { type: 'text', value: "Even with the interpolation caveats, here's the payoff that makes all of this worth it." },
          { type: 'table', headers: ['Method', 'Time for 151 snapshots', 'Speedup vs CFD'], rows: [
            ['CFD (OpenFOAM)', '~30 minutes', '1x'],
            ['PINN', '~7.5 seconds', '240x'],
            ['NODE + POD', '~0.15 seconds', '12,000x'],
            ['NODE + VAE', '~0.75 seconds', '2,400x'],
          ]},
          { type: 'text', value: "Once trained, these models turn a half-hour simulation into something between a fraction of a second and a few seconds. That's what makes things like real-time monitoring or rapid design exploration even thinkable, as long as you respect where the accuracy holds and where it doesn't." },
        ],
      },
      {
        heading: 'What I would actually recommend',
        content: [
          { type: 'text', value: "The honest conclusion is that no single method wins. It depends on what you're doing. For predicting at a known operating condition you've trained on, NODE+POD is fast, accurate, and lightweight. For physics-constrained learning with sparse data, a PINN works, as long as you can stomach the roughly 4.5-hour training time. And for exploring a parameter space with unseen conditions, NODE+VAE gives the best interpolation, though it's still imperfect." },
          { type: 'text', value: "The broader takeaway, and the thing I care most about from this project: good training accuracy tells you almost nothing about whether a surrogate will generalize. You have to validate on held-out conditions, or you'll ship something that looks perfect in testing and falls apart the moment it sees something new." },
        ],
      },
    ],
  },
}