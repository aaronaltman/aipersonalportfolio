import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const prompt = ChatPromptTemplate.fromMessages([
  ["human", "Tell me a short joke about {topic}"],
]);
const model = new ChatOpenAI({});
const outputParser = new StringOutputParser();

const chain = prompt.pipe(model).pipe(outputParser);

const response = await chain.invoke({
  topic: "ice cream",
});
console.log(response);

// Agents - task + tools + template
