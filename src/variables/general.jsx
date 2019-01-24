// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [
  'Optimization terminated successfully.',
  "---------------------------------------------------------------------------ImportError                               Traceback (most recent call last)<ipython-input-7-fecf0a409ab0> in <module>()1 import numpy as np----> 2 from scipy.optimize import mrnimizeImportError: cannot import name mrnimize",
  "NameError                                 Traceback (most recent call last)<ipython-input-5-e3490aa170d1> in <module>()----> 1 print(r.x)NameError: name 'r' is not defined",
  "  File <ipython-input-6-62b3ca599732>'', line 30, method='nelder-mead',options={'xtol': 1e-8, 'disp': True})^SyntaxError: invalid syntax"
];
var website = [
  "Set time for local optimisation variable",
  'Define the parameters of problem 3 correctly'
];
var server = [
  "Server completed after 20,340s",
  "New User Registered"
];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server
};
