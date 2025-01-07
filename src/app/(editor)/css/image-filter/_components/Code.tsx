
import { CodeBlock } from "@/app/(editor)/_components/EditPanel/widgets/_components/CodeBlock";
import highlight from "@/app/(editor)/_components/EditPanel/widgets/_components/Highlight";

async function Code() {
  return (
    <CodeBlock initial={await highlight('console.log("Rendered on server")', 'ts')} />
  )
}

export default Code
