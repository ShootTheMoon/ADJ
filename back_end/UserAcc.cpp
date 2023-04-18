#include "UserAcc.h"

UserAcc::UserAcc()
{
	int choice;

		cout << endl;
		cout << "***********************************************************************\n\n\n";
		cout << "                      Welcome to login page                               \n\n";
		cout << "*******************        MENU        *******************************\n\n";
		cout << "1. LOGIN" << endl;
		cout << "2. REGISTER" << endl;
		cout << "3. FORGOT PASSWORD (or) USERNAME" << endl;
		cout << "4. Delete Username and Password" << endl;
		cout << "5. Exit" << endl;
		cout << "\nEnter your choice: ";
		cin >> choice;
		cout << endl;

		switch (choice)
		{
		case 1: // find username and password in the database
			login();
			break;
		case 2: // input new username or password in the database
			registration();
			break;
		case 3: // change either the username or password in the database
			forgotInfo();
			break;
		case 4: // Delete the username and password you created
			deleteAcc();
			break;
		case 5: // If user decides to exit
			cout << "Have a good day." << endl;
			break;
		default: // If user mis-inputs value
			system("cls");
			cout << "You have selected the wrong input" << endl;
		}

		
}

void UserAcc::login()
{

	int count = 0;
	string UserName, Password, Uname, Pword, line;
	fstream db;

	cout << "Please input your UserName: ";
	cin >> UserName;
	cout << "Please input your Password: ";
	cin >> Password;

	db.open("tempDatabase.txt", ios::in);
	if (db.is_open())
	{
		getline(db, line); // Will read the whole line in one submission for the text we have at the beggining
		while (db >> Uname >> Pword) //Will be seperated to allow for reading based off the two values: (UserName and Password)
		{
			if (Uname == UserName && Pword == Password)
			{

				count = 1;
				break;
			}
		}
		if (count == 1)
		{
			system("cls");

			cout << "UserName and Password Found\nLogin Successful: Welcome " << UserName << endl;
			db.close();
			UserAcc();//For now until connected front end
		 }
		else
		{
			cout << "Sorry user is not found in the data base\nPlease try again";
			db.close();
			login();
		}
	}
	else
	{
		cout << "File is not able to be accessed at the current time, we apologize and will have the site back up shortly.";
		return;
	}
}

void UserAcc::registration()
{
	/*
		When a user creates an account they can't have a person with a similar username to someone in the database or else it can't pick the right acccount
		So will check is said user input name is available, if so will take the name if not will ask user to input a new user till they find one
	*/
	string regUser, regPass, rU, rP, line;
	int regCountU = 0, regCountP = 0, check = 0; // This is set up to make sure users have unique username and passwords
	fstream reg;

	//system("cls"); will not show last text to user if username is taken could do simple fix with if statement but dont really need to

	cout << "Enter new UserName: ";
	cin >> regUser;

	reg.open("tempDatabase.txt", ios::in); // Have it sent in read first to find if there are any users with the same username trying to be chose
	if (reg.is_open())
	{
		getline(reg, line);
		
		while (reg >> rU >> rP)
		{
			if (rU == regUser)
			{
				regCountU = 1;
			}
		}
	}

	if (regCountU == 1)
	{
		cout << "UserName is already taken, Please choose a new UserName." << endl;
		reg.close();
		registration();
	
	}
	else
	{	
		reg.close(); // close it to re-open it to append mode for new user name and password to be saved

		while (check == 0)
		{

			cout << "Enter new Password: ";
			cin >> regPass;

			reg.open("tempDatabase.txt", ios::in);
			if (reg.is_open())
			{
				getline(reg, line);

				while (reg >> rU >> rP)
				{
					if (rP == regPass)
					{
						regCountP = 1;
					}
				}
			}

			if (regCountP == 1)
			{
				cout << "Password is not unique, Please choose a new Password." << endl;
				reg.close();

			}
			else
			{
				check = 1;
				reg.close(); // close it to re-open it to append mode for new user name and password to be saved
				break;
			}
		}

			if (check == 1)
			{
				
				reg.open("tempDatabase.txt", ios::app);
				if (reg.is_open())
				{

					reg << regUser << ' ' << regPass << endl;
					system("cls");

					cout << "\nRegistration Successful " << regUser;
					reg.close();
					UserAcc();
				}

			}

	}
}

void UserAcc::forgotInfo() // Find User Info or change
{
	/*
	Since we are only doing username and password specific we can find an individuals independent user and either give them a new one or tell them their old one
	Also added in a change for password after learning how to delete User account
	*/
	string checkPass, checkUser, cP, cU, line;
	int choice, check = 0;
	fstream checkDB; 
	vector<string> upPass;
	//system("cls");

	cout << "1.Search your forgotten UserName" << endl;
	cout << "2.Search your forgotten password" << endl;
	cout << "3.Change/Update your current password" << endl;
	cout << "4.Main Menu" << endl;
	cin >> choice;

	switch (choice)
	{
	case 1:
		cout << "We are going to try and find your UserName based off your password\n Please input your password: ";
		cin >> checkPass;

		checkDB.open("tempDatabase.txt", ios::in);
		if (checkDB.is_open())
		{
			getline(checkDB, line);
			while (checkDB >> cU >> cP)
			{
				if (checkPass == cP)
				{
					check = 1;
					break;
				}
			}

			if (check == 1)
			{
				cout << "We have found your UserName to be: " << cU << endl;
				checkDB.close();
				UserAcc();
			}
			else
			{
				cout << "Unfortunately we could not find a UserName matching inputted Password, Please try again" << endl;
				checkDB.close();
				forgotInfo();
			}
		}


	case 2:
		cout << "We are going to try and find your Password based off your UserName\n Please input your password: ";
		cin >> checkUser;

		checkDB.open("tempDatabase.txt", ios::in);
		if (checkDB.is_open())
		{
			getline(checkDB, line);
			while (checkDB >> cU >> cP)
			{
				if (checkUser == cU)
				{
					check = 1;
					break;
				}
			}

			if (check == 1)
			{
				cout << "We have found your Password to be: " << cP << endl;
				checkDB.close();
				UserAcc();
			}
			else
			{
				cout << "Unfortunately we could not find a Password matching inputted UserName, Please try again" << endl;
				checkDB.close();
				forgotInfo();
			}
		}

	case 3:
		cout << "Please enter in your UserName: ";
		cin >> checkUser;

		cout << "Please enter in your current password: ";
		cin >> checkPass;


		checkDB.open("tempDatabase.txt", ios::in);
		if (checkDB.is_open())
		{
			getline(checkDB, line);
			while (checkDB >> cU >> cP)
			{
				if (checkUser == cU && checkPass == cP)
				{
					check = 1;
				}
			}
		}

		if (check == 1)
		{
			cout << "Accout found\nPlease enter in your new password: ";
			cin >> checkPass;

			checkDB.open("tempDatabase.txt", ios::in);
			if (checkDB.is_open())
			{
				getline(checkDB, line);
				upPass.push_back(line);

				while (checkDB >> cU >> cP)
				{
					if (cU == checkUser)
					{
						upPass.push_back(cU + " " + checkPass);
					}
					else
					{
						upPass.push_back(cU + " " + cP);

					}
				}

				checkDB.close();

				checkDB.open("tempDatabase.txt", ios::out);

				for (int i = 0; i <= upPass.size() - 1; i++)
				{
					checkDB << upPass[i] << endl;
				}

				checkDB.close();
				UserAcc();
			}
			else
			{
				cout << "Sorry we could not find your account, Please try again" << endl;
			}
		}
		else
		{
			cout << "Account not found, Sending back to screen.";
			forgotInfo();
		}

	case 4:
		cout << "Sending you to the main menu" << endl;
		UserAcc();
	}
}




void UserAcc::deleteAcc()
{
	/*
	To delete a users account, we need to copy all the values in the txt file into a vector then use a for loop to delete the line that has the user name and password on it not show

	*/

	string delUser, delPass, dU, dP, line, userPass;
	int choice, count = 0;
	fstream delDB;


	vector<string> upDB;

	cout << "Are you sure you would like to delete your account:\n1. Yes, Proceed\n2. No return to main menu" << endl;
	cin >> choice;

	switch (choice)
	{
	case 1:
		cout << "Please enter in your UserName: ";
		cin >> delUser;

		cout << "Please enter in your Password: ";
		cin >> delPass;

		delDB.open("tempDatabase.txt", ios::in);
		if (delDB.is_open())
		{
			getline(delDB, line);
			upDB.push_back(line);

			while (delDB >> dU >> dP)
			{
				if (dU == delUser && dP == delPass)
				{
					count = 1;
				}
				else
				{
					upDB.push_back(dU + " " + dP);
					
				}
			}

			if (count == 1)
			{
				cout << "UserName and Password Found\n FareWell " << delUser;
				delDB.close();

				delDB.open("tempDatabase.txt", ios::out);

				for (int i = 0; i <= upDB.size() - 1; i++)
				{
					delDB << upDB[i] << endl;
				}

				delDB.close();
				UserAcc();
			}
			else
			{
				cout << "Sorry we could not find your account, Please try again" << endl;
			}
		}
	case 2:
		system("cls");
		cout << "Glad you decided to stay with us" << endl;
		UserAcc();
	}

}
