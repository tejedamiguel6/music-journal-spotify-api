export function RichTextHtml(document) {
  // console.log("nodes=||||=>", document);

  const paragraph = document?.map((node) => {
    if (node?.nodeType === "paragraph") {
      return node?.content?.map((text) => {
        // console.log("Contetnful text from rte===>", text);
        const boldText = text?.marks?.some((mark) => mark.type === "bold");
        // console.log("is this bold", boldText);
        return (
          <>
            {boldText ? (
              <p>
                <strong>{text.value}</strong>{" "}
              </p>
            ) : (
              <p>{text.value}</p>
            )}
          </>
        );
      });
    }

    if (node?.nodeType === "unordered-list") {
      return node?.content?.map((list) => {
        // console.log("from function", list.content[0].content[0].value);
        const listItemsContent = list.content[0].content[0].value;
        return (
          <ul>
            <li>{listItemsContent}</li>
          </ul>
        );
      });
    }
  });

  return paragraph;
}
