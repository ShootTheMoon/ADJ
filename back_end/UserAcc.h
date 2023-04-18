#ifndef _UserAcc_H_
#define _UserAcc_H_

#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

class UserAcc
{
protected:
	// variables
	string UserName, Password;
	fstream db; // short for database
	string line;

public:
	UserAcc(); // Will be used to open the txt file
	
	//Methods
	void login();
	void registration();
	void forgotInfo();
	void deleteAcc();
	
};

#endif 