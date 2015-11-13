#include <stdio.h>
//program by CyberError
void hello();
int main(int argc,char** argv){
//most basic hello world.
printf("Hello World\n");
//Terminal handling:
if (argc > 1){
//if name is provided in argv, don't ask for it
hello(argv[1]);
}else {
//else ask for name
char name[BUFSIZ];
printf("Enter name:");
scanf("%s",name);
//and call hello
hello(name);
}
}
void hello(char *name){
//function for printing hello 'name'
printf("Hello %s\n",name);
}
