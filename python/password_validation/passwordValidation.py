# before anything
# You can use these passwords with the light_list.txt for testing
# Easy@1234 e Hard@1234
# Just change the second argument in the hydra method call (line 68) to "light_list.txt"

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

print("Input the password...")
password = input()
print(checkPassword(password))

def hydra(pw, path):
    
    with open(path) as fp:
        cnt = 0
        line = "1"
        while line:
            line = fp.readline()
            print("Try "+str(cnt)+": "+str(line.strip()))
            if str(line).strip() == str(pw).strip():
                return True
            cnt += 1
    
    return False

print("Do you want to try brute force on this password? (Y/n)")
input_=input()
if not ("no" == input_.lower() or "n" == input_.lower()):
    # here is an example using 10'000'000 (10 million) famous passwords
    #located in danielmiessler's github
    found = hydra(password, "<passwords_txt_path>")
    if found:
        print("Your password could be secure, but it is on the top 10^7 (10 Million) most used passwords. So it is crackable by dictionary attack")
    else:
        print("Your password is secure enough!")

