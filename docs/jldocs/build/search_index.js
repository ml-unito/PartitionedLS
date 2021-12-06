var documenterSearchIndex = {"docs":
[{"location":"#PartitionedLS.jl","page":"Home","title":"PartitionedLS.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"TBD","category":"page"},{"location":"#Package-Features","page":"Home","title":"Package Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"TBD","category":"page"},{"location":"#Function-Documentation","page":"Home","title":"Function Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"fit\npredict","category":"page"},{"location":"#PartitionedLS.fit","page":"Home","title":"PartitionedLS.fit","text":"fit(::Type{Alt}, X::Array{Float64,2}, y::Array{Float64,1}, P::Array{Int,2}; beta=randomvalues)\n\nFits a PartitionedLS model by alternating the optimization of the α and β variables.\n\nArguments\n\nX: N  M matrix describing the examples\ny: N vector with the output values for each example\nP: M  K matrix specifying how to partition the M attributes into K subsets. P_mk should be 1 if attribute number m belongs to\n\npartition k.\n\nη: regularization factor, higher values implies more regularized solutions\nT: number of alternating loops to be performed, defaults to 20.\nget_solver: a function returning the solver to be used. Defaults to () -> ECOSSolver()\nresume and checkpoint allows for restarting an optimization from a given checkpoint. \n\nResult\n\nA tuple of the form: (opt, a, b, t, P)\n\nopt: optimal value of the objective function (loss + regularization)\na: values of the α variables at the optimal point\nb: values of the β variables at the optimal point\nt: the intercept at the optimal point\nP: the partition matrix (copied from the input)\n\n\n\n\n\nfit(::Type{Opt}, X::Array{Float64,2}, y::Array{Float64,1}, P::Array{Int,2}; beta=randomvalues)\n\nFits a PartialLS Regression model to the given data and resturns the learnt model (see the Result section).\n\nArguments\n\nX: N  M matrix describing the examples\ny: N vector with the output values for each example\nP: M  K matrix specifying how to partition the M attributes into K subsets. P_mk should be 1 if attribute number m belongs to\n\npartition k.\n\nη: regularization factor, higher values implies more regularized solutions\nget_solver: a function returning the solver to be used. Defaults to () -> ECOSSolver()\n\nResult\n\nA tuple of the form: (opt, a, b, t, P)\n\nopt: optimal value of the objective function (loss + regularization)\na: values of the α variables at the optimal point\nb: values of the β variables at the optimal point\nt: the intercept at the optimal point\nP: the partition matrix (copied from the input)\n\nThe output model predicts points using the formula: f(X) = X * (P * a) * b + t.\n\n\n\n\n\nfit(::Type{BnB}, X::Array{Float64,2}, y::Array{Float64,1}, P::Array{Int,2}, η=1.0, nnlsalg=:pivot)\n\nImplements the Branch and Bound algorithm to fit a Partitioned Least Squres model.\n\nArguments\n\nX: N  M matrix describing the examples\ny: N vector with the output values for each example\nP: M  K matrix specifying how to partition the M attributes into K subsets. P_mk should be 1 if attribute number m belongs to\n\npartition k.\n\nη: regularization factor, higher values implies more regularized solutions\nnnlsalg: the kind of nnls algorithm to be used during solving\n\nResult\n\nA tuple of the form: (opt, a, b, t, P, nopen)\n\nopt: optimal value of the objective function (loss + regularization)\na: values of the α variables at the optimal point\nb: values of the β variables at the optimal point\nt: the intercept at the optimal point\nP: the partition matrix (copied from the input)\nnopen: the number of nodes opened by the BnB algorithm\n\nThe output model predicts points using the formula: f(X) = X * (P * a) * b + t.\n\n\n\n\n\n","category":"function"},{"location":"#PartitionedLS.predict","page":"Home","title":"PartitionedLS.predict","text":"predict(model::Tuple, X::Array{Float64,2})\n\nreturns the predictions of the given model on examples in X. \n\n\n\n\n\n","category":"function"}]
}