import CodeBlock from "@/components/atoms/CodeBlock";
import highlight from "@/components/atoms/Highlight";

async function Code() {
  return (
    <CodeBlock initial={await highlight('console.log("Rendered on server")', 'ts')} />
  )
}

export default Code
