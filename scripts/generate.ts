import { TextLoader } from "langchain/document_loaders/fs/text";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

async function generateEmbeddings() {
  const loader = new DirectoryLoader("./src/app", {
    ".txt": (path) => new TextLoader(path),
  });
  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 300,
    chunkOverlap: 50,
    separators: ["\n\n", "\n", ".", " "],
  });
  const splitDocs = await splitter.splitDocuments(docs);
  console.log(splitDocs);
}
generateEmbeddings();
