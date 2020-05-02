import { print } from "./env";

// Or in the same file with :

// @external("env", "print")
// declare function print(message:string):void;

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function start(name:string):void {
  var stuff:Something = new Something(name);
  stuff.start();
}

export class Something {
  private name:string;
  constructor(name:string) {
    this.name = name;
  }
  public start():void {
    print("One thwo three");
    print("Complexe operations...");
    print("My name is " + this.name);
  }
}