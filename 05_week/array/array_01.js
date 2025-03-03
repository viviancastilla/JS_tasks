let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Task 1
for(const members of teamMembers){
    console.log(members);
}

// Task 2, 3, 4, 5
teamMembers.shift();
teamMembers.pop();
teamMembers.unshift("Alex");
teamMembers.push("Linda");
console.log(teamMembers);

//Task 6
let exclude = teamMembers.slice(2);
console.log(exclude);

//Task 7, 8
let lookFor = teamMembers.find(teamMembers => teamMembers.Mike);
let lookFor2 = teamMembers.find(teamMembers => teamMembers.Jake);

//Task 9
let replace = teamMembers.splice(0, 0, "Carol");
console.log(replace);