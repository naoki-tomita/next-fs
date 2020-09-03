import { readFile } from "fs";
import { NextPage } from "next";
async function readFileAsync(path: string): Promise<string> {
  return new Promise(ok => readFile(path, (_, data) => ok(data.toString())));
}

interface Props {
  data: string;
}

const Index: NextPage<Props> = ({ data }) => {
  return (
    <div>{data}</div>
  );
}

Index.getInitialProps = async (): Promise<Props> => {
  return { data: await readFileAsync("./resources/foo.txt") };
}

export default Index;
