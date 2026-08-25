# PYTHON VARIABLES AND DATA TYPES

# A variable is a name used to store a value.
# Python automatically determines the data type from the assigned value.


# 1. INTEGER (int)
# An integer is a whole number without a decimal point.
x = 10


# 2. FLOAT (float)
# A float is a number containing a decimal point.
y = 3.14


# 3. STRING (str)
# A string stores text and must be enclosed in quotes.
z = "Hello"


# 4. BOOLEAN (bool)
# A Boolean can only be True or False.
# True and False must begin with capital letters.
a = True


# 5. LIST (list)
# A list stores multiple items using square brackets [].
# A list is ordered, allows duplicates, and is mutable.
# Mutable means its contents can be changed after creation.
b = [1, 2, 2, 3, 4]

print("Original list:", b)

# Python indexes begin at 0.
print("First list item:", b[0])

# Lists are mutable, so we can change an existing item.
b[0] = 10
print("Modified list:", b)

# The duplicate number 2 remains because lists allow duplicates.
print("List with duplicate values:", b)


# 6. SET (set)
# A set stores unique items using curly braces {}.
# A set is unordered and automatically removes duplicates.
c = {1, 2, 2, 3}

# Although 2 was entered twice, it appears only once.
print("Set without duplicates:", c)

# Sets are unordered, so their items cannot be accessed by index.
# The following would cause an error:
# print(c[0])


# 7. TUPLE (tuple)
# A tuple stores multiple items using parentheses ().
# A tuple is ordered and allows duplicates.
# Unlike a list, a tuple is immutable and cannot be changed.
# Immutable means a value cannot be changed after it has been created.  
d = (1, 2, 2, 3)

print("Tuple:", d)
print("First tuple item:", d[0])

# The following would cause an error because tuples are immutable:
# d[0] = 10


# 8. DICTIONARY (dict)
# A dictionary stores information as key-value pairs.
# It is similar to a JavaScript object.
e = {
    "name": "Julius",
    "course": "Python"
}

# Dictionary values are accessed using their keys.
print("Name:", e["name"])
print("Course:", e["course"])


# DETERMINING DATA TYPES

# The type() function identifies the data type of a value or variable.

print("Type of x:", type(x))
print("Type of y:", type(y))
print("Type of z:", type(z))
print("Type of a:", type(a))
print("Type of b:", type(b))
print("Type of c:", type(c))
print("Type of d:", type(d))
print("Type of e:", type(e))