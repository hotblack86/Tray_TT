**Implementation & Sales Engineer Technical Exercise**

A program that navigates an imaginary robotic hoover (much like a Roomba) through an equally imaginary room.
</br>

***Approach:-***

- Seperate responsibility for the software into 3 classes:
  - DataHandler:
    Parses the input.txt file and returns usable data from it.
  - Floor:
    Takes in as parameters the room dimensions and location of dirt patches from the DataHandler class.
  - Hoover:
    Takes in as parameters a Floor object and the initial hoover position from the DataHandler Class.
    Moves the hoover using the parsed input.txt directions.
    It returns the final hoover position and number of dirt patches cleaned.

- Use TDD to build the project throughout. Using Jasmine testing framework.

- Refactor after every test pass where possible, to keep methods skinny and code dry.


***Installation***
- clone this repository
```
git clone git@github.com:hotblack86/Tray_TT.git
```

- go to repository folder
```
cd Tray_TT
```

- make sure you have node and npm installed

- install dependencies
```
npm install
```


***Usage***
- run the program with node
```
node index.js
```
The output from index.js will be visible in the console


- run tests
```
npm test
```


If you wish, you can change the input in input.txt as long as the format is the same. Likewise if you have a different txt file you wish to use as input then simply change the parameter of the following line in index.js:
```
datahandler.parse('./your/path/to/file.txt"');
```
Again the format of the file must be the same as input.txt.
