from pulp import LpMaximize, LpProblem, LpVariable, value, LpStatus
import math

def branch_and_bound(objective_coeffs, constraints, constraint_bounds):
    """
    Solves an integer programming problem using the Branch and Bound method.
    
    Parameters:
    - objective_coeffs: List of coefficients for the objective function.
    - constraints: List of lists, where each sublist contains coefficients of a constraint.
    - constraint_bounds: List of right-hand side values of the constraints.
    
    Returns:
    - Tuple (Optimal solution as a list, Optimal objective value)
    """
    num_vars = len(objective_coeffs)  # Number of decision variables
    
    # Create the initial LP problem (Relaxed LP without integer constraints)
    problem = LpProblem("Branch_and_Bound", LpMaximize)
    
    # Define decision variables (Initially continuous)
    x = [LpVariable(f"x{i+1}", lowBound=0, cat="Continuous") for i in range(num_vars)]
    
    # Define objective function: Maximize Z
    problem += sum(objective_coeffs[i] * x[i] for i in range(num_vars)), "Objective"
    
    # Add constraints
    for i in range(len(constraints)):
        problem += sum(constraints[i][j] * x[j] for j in range(num_vars)) <= constraint_bounds[i]
    
    # Solve the relaxed problem (LP without integer constraints)
    problem.solve()
    
    # Check if the solution is already integer
    solution = [value(var) for var in x]
    if all(math.isclose(sol, round(sol)) for sol in solution):
        return [round(sol) for sol in solution], value(problem.objective)

    # Initialize Branch and Bound variables
    best_solution = None
    best_value = float('-inf')
    stack = [(problem, solution)]  # Stack for storing subproblems

    # Start Branch and Bound
    while stack:
        current_problem, current_solution = stack.pop()

        # Find the first non-integer variable
        for i, val in enumerate(current_solution):
            if not math.isclose(val, round(val)):  # If it's fractional
                floor_value = math.floor(val)
                ceil_value = math.ceil(val)

                # Branch into two subproblems
                for bound in [floor_value, ceil_value]:
                    new_problem = current_problem.copy()
                    new_problem += x[i] == bound  # Fix variable to floor or ceil value

                    new_problem.solve()
                    new_solution = [value(var) for var in x]

                    # If solution is integer and better, update best solution
                    if new_problem.status == 1 and new_solution:
                        if all(math.isclose(sol, round(sol)) for sol in new_solution):
                            new_value = value(new_problem.objective)
                            if new_value > best_value:
                                best_value = new_value
                                best_solution = [round(sol) for sol in new_solution]

                    # Push feasible problems to the stack
                    if new_problem.status == 1:
                        stack.append((new_problem, new_solution))
                
                break  # Branch only on the first fractional variable

    return best_solution, best_value

def get_input():
    """
    Function to get input from the user for the Branch and Bound problem.
    """
    num_vars = int(input("Enter the number of variables: "))
    objective_coeffs = []
    for i in range(num_vars):
        coeff = float(input(f"Enter the coefficient for x{i+1} in the objective function: "))
        objective_coeffs.append(coeff)
    
    num_constraints = int(input("Enter the number of constraints: "))
    constraints = []
    for i in range(num_constraints):
        constraint = []
        for j in range(num_vars):
            coeff = float(input(f"Enter the coefficient for x{j+1} in constraint {i+1}: "))
            constraint.append(coeff)
        constraints.append(constraint)
    
    constraint_bounds = []
    for i in range(num_constraints):
        bound = float(input(f"Enter the right-hand side value for constraint {i+1}: "))
        constraint_bounds.append(bound)
    
    return objective_coeffs, constraints, constraint_bounds

if __name__ == "__main__":
    print("Welcome to the Branch and Bound Solver")
    objective, constraints, constraint_bounds = get_input()
    
    # Solve the integer programming problem
    optimal_solution, optimal_value = branch_and_bound(objective, constraints, constraint_bounds)
    
    # Display the result
    print("Optimal Integer Solution:", optim1al_solution)
    print("Optimal Objective Value:", optimal_value)