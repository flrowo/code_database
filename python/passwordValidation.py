# simple password validation to make sure passwords are minimaly secure

def thereIs(charString, string):
    i=0
    while i < len(string):
        if charString.find(string[i]) >= 0:
            print(string[i])
            return True
        i=i+1
    return False

def checkPassword(pw):
    allChar = " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]}{()!@#$%^&*()-+_=:;,.?|`~/\\\"'"
    numberChar = "0123456789"
    specialChar = "[]}{()!@#$%^&*()-+_=:;,.?|`~/\\\"'"

    #Check if password is valid
    if not str(pw):
        return "ERROR: INPUT IS NOT STRING"
    pw = str(pw)
    if not thereIs(allChar, pw):
        return "ERROR: INPUT HAS UKNOWN CHARACTER"

    # At least 8 characters
    if len(pw) < 8:
        return "INSECURE! Password has less than 8 characters!"
    
    # At least both one lowercase and uppercase
    if pw.isupper() or pw.islower():
        return "INSECURE! Password doesn't have uppercase or lowercase letter!"
    
    # Mix of letters and numbers
    if not thereIs(numberChar, pw):
        return "INSECURE! No numbers in the password!"
    
    # Include one special character
    if not thereIs(specialChar, pw):
        return "INSECURE! No special characters in the password!"

    return "PERFECT! This is a strong password"

print(checkPassword(input()))
