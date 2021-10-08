class ShikiSyntaxHighlighter < Asciidoctor::SyntaxHighlighter::Base
  register_for 'shiki'

  def initialize *args
    # using a hash means only one of each language is allowed
    @langs = Hash.new
    super
  end

  def format node, lang, opts
    opts[:transform] = proc do |pre, code|
      if lang
        code['class'] = %(language-#{lang})
        @langs[lang] = true
      end
    end
    super
  end

  def docinfo? location
    location == :footer
  end

  def docinfo location, doc, opts
    slash = opts[:self_closing_tag_slash]
    # removes the "pseudocode" language from the highlighter, as shiki doesn't think it exists.
    @langs.delete('pseudocode')
    script = "
    shiki.getHighlighter({
      themes: ['min-light'],
      langs: #{@langs.keys()}
    }).then(highlighter => {
      document.querySelectorAll('.shiki').forEach(i => {
        const codeElem = i.querySelector('code')
        try {
          const code = highlighter.codeToHtml(codeElem.innerText, codeElem.dataset.lang)
          i.innerHTML = code
        } catch {
          console.warn('shiki', `lang '${codeElem.dataset.lang}' couldn't be highlighted`, codeElem)
        }
      })
    })"
    %(<script src="https://raw.githubusercontent.com/engelben/shiki/main/packages/shiki/dist/index.jsdelivr.iife.js"></script>
    <script>
      #{script}
    </script>)
    
  end
end