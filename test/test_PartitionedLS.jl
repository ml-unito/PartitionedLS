using PartitionedLS: fit_alternating, fit_alternating_slow, fit

X = [[1. 2. 3.]; 
     [3. 3. 4.]; 
     [8. 1. 3.]; 
     [5. 3. 1.]]

y = [1.; 
     1.; 
     2.; 
     3.]

P = [[1 0]; 
     [1 0]; 
     [0 1]]


result = fit_alternating(X, y, P, verbose=0)
result_opt = fit(X, y, P, verbose=0)