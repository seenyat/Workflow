import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import CodeBox from "@bomdi/codebox";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  paragraph: Paragraph,
  list: List,
  linkTool: LinkTool,
  image: Image,
  header: Header,
  codeBox: {
    class: CodeBox,
    config: {
      themeURL:
        "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css", // Optional
      themeName: "atom-one-dark", // Optional
      useDefaultTheme: "light", // Optional. This also determines the background color of the language select drop-down
    },
  },
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
