output_template = " is a prime number"

def is_prime(x):
  if x < 2:
    return False
  else:
    for i in range(2, x):
      if x % i == 0:
        return False
    return True


for i in range(5,51):
  if is_prime(i):
    print(str(i) + output_template)
