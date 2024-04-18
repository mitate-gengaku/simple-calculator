## 使用方法
プロジェクトにインストールします。
```bash
npm install
```
`<Book />`を表示したい場所に追加してください。

```tsx
import {
  Book,
  useBook
} from ''

function App() {
  const {
    currentPage,
    contents,
    prevPage,
    nextPage,
  } = useBook(content);

  return (
    <div>
      <Book 
        title=""
        authorName=""
        summary=""
        contents={contents}
        update={0}
        bookId=""
        bookPhotoUrl=""
        prevPage={prevPage}
        nextPage={nextPage}
        price={0}
        publisher={""}
        />
    </div>
  )
}
```