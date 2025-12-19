import * as dotenv from 'dotenv';
import { Todo } from "./todo.js";

dotenv.config()


async function main() {

    const todo = new Todo(1, "Finish TypeScript project.", false, "major");
    console.log("Initial Todo:", todo);

    todo.toggleCompletion();
    console.log("After toggling completion:", todo);


}

main().catch(console.error);