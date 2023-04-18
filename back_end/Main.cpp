
#include "UserAcc.h"
/*
ios:: out will overwrite any text within the txt file 
ios:: app will append and add text within the txt file
ios:: in will be to read a txt file
    This is why we use include <string> because we create a string line to allow for us to read the database line by line

we use system("cls"); to clear the screen from being overly populated

    getline(db, line); // Will read the whole line in one submission for the text we have at the beggining
    while (db >> UserName >> Password) //Will be seperated to allow for reading based off the two values: (UserName and Password)

        /*
    
    fstream db;
    db.open("tempDataBase.txt", ios::out);//This is to open the file to be able to write feely.

        if (db.is_open())
        {
            // To write text in the file it is the same as a cout however with the file opener we used in this case db
        }    
    */
 


int main()
{
    UserAcc checker;

}