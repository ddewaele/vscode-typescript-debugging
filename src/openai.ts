import { ChatOpenAI } from "@langchain/openai";
import * as dotenv from 'dotenv';

dotenv.config()


async function main() {
    const model = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0,
    });

    const res = await model.invoke("what is javascript?");

    console.log("Response:", res.content);
}

main().catch(console.error);