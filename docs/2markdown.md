# Markdown Syntax
- There is a [markdown guide](https://www.markdownguide.org/) you can reference.
- They also have a [cheat sheet](https://www.markdownguide.org/cheat-sheet/)
- I have adapted the cheat sheet below.
- There are some extended syntax elements that *do not appear* to be supported by Codsify. I am leaving it in just in case it becomes supported in the future.
- it may be out of date. Check out the link above for the original page.

## Markdown Cheat Sheet

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

```
# H1
## H2
### H3
```

# H1 <!-- {docsify-ignore} -->
## H2 <!-- {docsify-ignore} -->
### H3 <!-- {docsify-ignore} -->

### Bold

```
**bold text**
```

**bold text**

### Italic

```
*italicized text*
```

*italicized text*

### Blockquote

```
> blockquote
```

> blockquote

### Ordered List
```
1. First item
1. Second item
1. Third item
```
1. First item
1. Second item
1. Third item

### Unordered List

```
- First item
- Second item
- Third item
```

- First item
- Second item
- Third item

### Code

#### Inline Code

```
`code`
```

This is a line  with inline `code`

#### Code Block

    ```
    Fenced Code Block
    ```

```
Fenced  Code Block
```

### Horizontal Rule

```
---
***
```

---
***

### Link

```
[Markdown Guide](https://www.markdownguide.org)
```

[Markdown Guide](https://www.markdownguide.org)

### Image

```
![alt text](https://www.markdownguide.org/assets/images/tux.png)
```

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

```
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
```

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Footnote

```
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

***Author's Note***
This doesn't not appear to work with Codsify.

```
### My Great Heading {#custom-id}
```

### My Great Heading {#custom-id}

### Definition List

```
term
: definition, another definition
```

term
: definition, another definition

### Strikethrough

```
~~The world is flat.~~
```

~~The world is flat.~~

### Task List

```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

```
That is so funny! :joy:
```

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

***Author's Note*** This doesn't not appear to work with Codsify.

```
I need to highlight these ==very important words==.
```

I need to highlight these ==very important words==.

### Subscript

***Author's Note*** This doesn't not appear to work with Codsify.

```
H~2~O
```

H~2~O

### Superscript

***Author's Note*** This doesn't not appear to work with Codsify.

```
X^2^
```

X^2^