export  default function Child ({parentMsg, parentFn}) {

    const messageFromChild = 'Da, mama!'
    return (
<>

<h3>Message from parent: {parentMsg}</h3>
<button onClick={(event) => parentFn(event, messageFromChild)}>Poruci mami</button>

</>

    )
}