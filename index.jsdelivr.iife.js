!(function (e) {
  'use strict'
  const t = [
    {
      id: 'abap',
      scopeName: 'source.abap',
      path: 'abap.tmLanguage.json',
      samplePath: 'abap.sample'
    },
    {
      id: 'actionscript-3',
      scopeName: 'source.actionscript.3',
      path: 'actionscript-3.tmLanguage.json',
      samplePath: 'actionscript-3.sample'
    },
    { id: 'ada', scopeName: 'source.ada', path: 'ada.tmLanguage.json', samplePath: 'ada.sample' },
    { id: 'apache', scopeName: 'source.apacheconf', path: 'apache.tmLanguage.json' },
    {
      id: 'apex',
      scopeName: 'source.apex',
      path: 'apex.tmLanguage.json',
      samplePath: 'apex.sample'
    },
    {
      id: 'apl',
      scopeName: 'source.apl',
      path: 'apl.tmLanguage.json',
      embeddedLangs: ['html', 'xml', 'css', 'javascript', 'json']
    },
    {
      id: 'applescript',
      scopeName: 'source.applescript',
      path: 'applescript.tmLanguage.json',
      samplePath: 'applescript.sample'
    },
    {
      id: 'asm',
      scopeName: 'source.asm.x86_64',
      path: 'asm.tmLanguage.json',
      samplePath: 'asm.sample'
    },
    {
      id: 'astro',
      scopeName: 'text.html.astro',
      path: 'astro.tmLanguage.json',
      samplePath: 'astro.sample',
      embeddedLangs: ['css', 'sass', 'scss', 'tsx']
    },
    { id: 'awk', scopeName: 'source.awk', path: 'awk.tmLanguage.json', samplePath: 'awk.sample' },
    {
      id: 'ballerina',
      scopeName: 'source.ballerina',
      path: 'ballerina.tmLanguage.json',
      samplePath: 'ballerina.sample'
    },
    {
      id: 'bat',
      scopeName: 'source.batchfile',
      path: 'bat.tmLanguage.json',
      samplePath: 'bat.sample',
      aliases: ['batch']
    },
    { id: 'c', scopeName: 'source.c', path: 'c.tmLanguage.json', samplePath: 'c.sample' },
    {
      id: 'clojure',
      scopeName: 'source.clojure',
      path: 'clojure.tmLanguage.json',
      samplePath: 'clojure.sample',
      aliases: ['clj']
    },
    {
      id: 'cobol',
      scopeName: 'source.cobol',
      path: 'cobol.tmLanguage.json',
      samplePath: 'cobol.sample',
      embeddedLangs: ['sql', 'html', 'java']
    },
    {
      id: 'coffee',
      scopeName: 'source.coffee',
      path: 'coffee.tmLanguage.json',
      samplePath: 'coffee.sample',
      embeddedLangs: ['javascript']
    },
    {
      id: 'cpp',
      scopeName: 'source.cpp',
      path: 'cpp.tmLanguage.json',
      samplePath: 'cpp.sample',
      embeddedLangs: ['sql']
    },
    {
      id: 'crystal',
      scopeName: 'source.crystal',
      path: 'crystal.tmLanguage.json',
      samplePath: 'crystal.sample',
      embeddedLangs: ['html', 'sql', 'css', 'c', 'javascript', 'shellscript']
    },
    {
      id: 'csharp',
      scopeName: 'source.cs',
      path: 'csharp.tmLanguage.json',
      samplePath: 'csharp.sample',
      aliases: ['c#']
    },
    { id: 'css', scopeName: 'source.css', path: 'css.tmLanguage.json', samplePath: 'css.sample' },
    { id: 'd', scopeName: 'source.d', path: 'd.tmLanguage.json', samplePath: 'd.sample' },
    {
      id: 'dart',
      scopeName: 'source.dart',
      path: 'dart.tmLanguage.json',
      samplePath: 'dart.sample'
    },
    {
      id: 'diff',
      scopeName: 'source.diff',
      path: 'diff.tmLanguage.json',
      samplePath: 'diff.sample'
    },
    {
      id: 'docker',
      scopeName: 'source.dockerfile',
      path: 'docker.tmLanguage.json',
      samplePath: 'docker.sample'
    },
    { id: 'dream-maker', scopeName: 'source.dm', path: 'dream-maker.tmLanguage.json' },
    {
      id: 'elixir',
      scopeName: 'source.elixir',
      path: 'elixir.tmLanguage.json',
      samplePath: 'elixir.sample',
      embeddedLangs: ['html']
    },
    { id: 'elm', scopeName: 'source.elm', path: 'elm.tmLanguage.json', samplePath: 'elm.sample' },
    {
      id: 'erb',
      scopeName: 'text.html.erb',
      path: 'erb.tmLanguage.json',
      samplePath: 'erb.sample',
      embeddedLangs: ['html', 'ruby']
    },
    {
      id: 'erlang',
      scopeName: 'source.erlang',
      path: 'erlang.tmLanguage.json',
      samplePath: 'erlang.sample'
    },
    {
      id: 'fish',
      scopeName: 'source.fish',
      path: 'fish.tmLanguage.json',
      samplePath: 'fish.sample'
    },
    {
      id: 'fsharp',
      scopeName: 'source.fsharp',
      path: 'fsharp.tmLanguage.json',
      samplePath: 'fsharp.sample',
      aliases: ['f#'],
      embeddedLangs: ['markdown']
    },
    { id: 'gherkin', scopeName: 'text.gherkin.feature', path: 'gherkin.tmLanguage.json' },
    {
      id: 'git-commit',
      scopeName: 'text.git-commit',
      path: 'git-commit.tmLanguage.json',
      embeddedLangs: ['diff']
    },
    {
      id: 'git-rebase',
      scopeName: 'text.git-rebase',
      path: 'git-rebase.tmLanguage.json',
      embeddedLangs: ['shellscript']
    },
    { id: 'gnuplot', scopeName: 'source.gnuplot', path: 'gnuplot.tmLanguage.json' },
    { id: 'go', scopeName: 'source.go', path: 'go.tmLanguage.json', samplePath: 'go.sample' },
    {
      id: 'graphql',
      scopeName: 'source.graphql',
      path: 'graphql.tmLanguage.json',
      embeddedLangs: ['javascript', 'typescript', 'jsx', 'tsx']
    },
    { id: 'groovy', scopeName: 'source.groovy', path: 'groovy.tmLanguage.json' },
    {
      id: 'hack',
      scopeName: 'source.hack',
      path: 'hack.tmLanguage.json',
      embeddedLangs: ['html', 'sql']
    },
    {
      id: 'haml',
      scopeName: 'text.haml',
      path: 'haml.tmLanguage.json',
      embeddedLangs: ['ruby', 'javascript', 'sass', 'coffee', 'markdown', 'css']
    },
    {
      id: 'handlebars',
      scopeName: 'text.html.handlebars',
      path: 'handlebars.tmLanguage.json',
      aliases: ['hbs'],
      embeddedLangs: ['html', 'css', 'javascript', 'yaml']
    },
    { id: 'haskell', scopeName: 'source.haskell', path: 'haskell.tmLanguage.json' },
    { id: 'hcl', scopeName: 'source.hcl', path: 'hcl.tmLanguage.json' },
    { id: 'hlsl', scopeName: 'source.hlsl', path: 'hlsl.tmLanguage.json' },
    {
      id: 'html',
      scopeName: 'text.html.basic',
      path: 'html.tmLanguage.json',
      samplePath: 'html.sample',
      embeddedLangs: ['javascript', 'css']
    },
    { id: 'ini', scopeName: 'source.ini', path: 'ini.tmLanguage.json' },
    {
      id: 'java',
      scopeName: 'source.java',
      path: 'java.tmLanguage.json',
      samplePath: 'java.sample'
    },
    {
      id: 'javascript',
      scopeName: 'source.js',
      path: 'javascript.tmLanguage.json',
      samplePath: 'javascript.sample',
      aliases: ['js']
    },
    {
      id: 'jinja-html',
      scopeName: 'text.html.jinja',
      path: 'jinja-html.tmLanguage.json',
      embeddedLangs: ['html']
    },
    { id: 'json', scopeName: 'source.json', path: 'json.tmLanguage.json' },
    { id: 'jsonc', scopeName: 'source.json.comments', path: 'jsonc.tmLanguage.json' },
    { id: 'jsonnet', scopeName: 'source.jsonnet', path: 'jsonnet.tmLanguage.json' },
    {
      id: 'jssm',
      scopeName: 'source.jssm',
      path: 'jssm.tmLanguage.json',
      samplePath: 'jssm.sample',
      aliases: ['fsl']
    },
    { id: 'jsx', scopeName: 'source.js.jsx', path: 'jsx.tmLanguage.json' },
    {
      id: 'julia',
      scopeName: 'source.julia',
      path: 'julia.tmLanguage.json',
      embeddedLangs: ['cpp', 'python', 'javascript', 'r', 'sql']
    },
    {
      id: 'jupyter',
      scopeName: 'source.jupyter',
      path: 'jupyter.tmLanguage.json',
      embeddedLangs: ['json']
    },
    { id: 'kotlin', scopeName: 'source.kotlin', path: 'kotlin.tmLanguage.json' },
    {
      id: 'latex',
      scopeName: 'text.tex.latex',
      path: 'latex.tmLanguage.json',
      embeddedLangs: [
        'tex',
        'css',
        'html',
        'java',
        'javascript',
        'typescript',
        'lua',
        'python',
        'julia',
        'ruby',
        'xml',
        'yaml',
        'cpp',
        'haskell',
        'scala',
        'gnuplot'
      ]
    },
    {
      id: 'less',
      scopeName: 'source.css.less',
      path: 'less.tmLanguage.json',
      embeddedLangs: ['css']
    },
    { id: 'lisp', scopeName: 'source.lisp', path: 'lisp.tmLanguage.json' },
    { id: 'logo', scopeName: 'source.logo', path: 'logo.tmLanguage.json' },
    { id: 'lua', scopeName: 'source.lua', path: 'lua.tmLanguage.json', embeddedLangs: ['c'] },
    {
      id: 'make',
      scopeName: 'source.makefile',
      path: 'make.tmLanguage.json',
      aliases: ['makefile']
    },
    {
      id: 'markdown',
      scopeName: 'text.html.markdown',
      path: 'markdown.tmLanguage.json',
      aliases: ['md'],
      embeddedLangs: [
        'css',
        'html',
        'ini',
        'java',
        'lua',
        'make',
        'perl',
        'r',
        'ruby',
        'php',
        'sql',
        'vb',
        'xml',
        'xsl',
        'yaml',
        'bat',
        'clojure',
        'coffee',
        'c',
        'cpp',
        'diff',
        'docker',
        'git-commit',
        'git-rebase',
        'go',
        'groovy',
        'pug',
        'javascript',
        'json',
        'jsonc',
        'less',
        'objective-c',
        'swift',
        'scss',
        'raku',
        'powershell',
        'python',
        'rust',
        'scala',
        'shellscript',
        'typescript',
        'tsx',
        'csharp',
        'fsharp',
        'dart',
        'handlebars',
        'erlang',
        'elixir'
      ]
    },
    { id: 'matlab', scopeName: 'source.matlab', path: 'matlab.tmLanguage.json' },
    {
      id: 'mdx',
      scopeName: 'text.html.markdown.jsx',
      path: 'mdx.tmLanguage.json',
      embeddedLangs: ['jsx', 'markdown']
    },
    { id: 'nginx', scopeName: 'source.nginx', path: 'nginx.tmLanguage.json' },
    {
      id: 'nim',
      scopeName: 'source.nim',
      path: 'nim.tmLanguage.json',
      embeddedLangs: ['c', 'html', 'xml', 'javascript', 'css', 'markdown']
    },
    { id: 'nix', scopeName: 'source.nix', path: 'nix.tmLanguage.json' },
    {
      id: 'objective-c',
      scopeName: 'source.objc',
      path: 'objective-c.tmLanguage.json',
      aliases: ['objc']
    },
    { id: 'objective-cpp', scopeName: 'source.objcpp', path: 'objective-cpp.tmLanguage.json' },
    { id: 'ocaml', scopeName: 'source.ocaml', path: 'ocaml.tmLanguage.json' },
    { id: 'openscenario-2', scopeName: 'source.osc2', path: 'openscenario-2.tmLanguage.json' },
    { id: 'pascal', scopeName: 'source.pascal', path: 'pascal.tmLanguage.json' },
    {
      id: 'perl',
      scopeName: 'source.perl',
      path: 'perl.tmLanguage.json',
      embeddedLangs: ['html', 'xml', 'css', 'javascript', 'sql']
    },
    {
      id: 'php',
      scopeName: 'source.php',
      path: 'php.tmLanguage.json',
      embeddedLangs: ['html', 'xml', 'sql', 'javascript', 'json', 'css']
    },
    { id: 'plsql', scopeName: 'source.plsql.oracle', path: 'plsql.tmLanguage.json' },
    { id: 'postcss', scopeName: 'source.css.postcss', path: 'postcss.tmLanguage.json' },
    {
      id: 'powershell',
      scopeName: 'source.powershell',
      path: 'powershell.tmLanguage.json',
      aliases: ['ps', 'ps1']
    },
    {
      id: 'prisma',
      scopeName: 'source.prisma',
      path: 'prisma.tmLanguage.json',
      samplePath: 'prisma.sample'
    },
    { id: 'prolog', scopeName: 'source.prolog', path: 'prolog.tmLanguage.json' },
    {
      id: 'pug',
      scopeName: 'text.pug',
      path: 'pug.tmLanguage.json',
      aliases: ['jade'],
      embeddedLangs: ['javascript', 'css', 'sass', 'stylus', 'coffee', 'html']
    },
    { id: 'puppet', scopeName: 'source.puppet', path: 'puppet.tmLanguage.json' },
    { id: 'purescript', scopeName: 'source.purescript', path: 'purescript.tmLanguage.json' },
    {
      id: 'python',
      scopeName: 'source.python',
      path: 'python.tmLanguage.json',
      samplePath: 'python.sample',
      aliases: ['py']
    },
    { id: 'r', scopeName: 'source.r', path: 'r.tmLanguage.json' },
    { id: 'raku', scopeName: 'source.perl.6', path: 'raku.tmLanguage.json', aliases: ['perl6'] },
    {
      id: 'razor',
      scopeName: 'text.aspnetcorerazor',
      path: 'razor.tmLanguage.json',
      embeddedLangs: ['html', 'csharp']
    },
    { id: 'riscv', scopeName: 'source.riscv', path: 'riscv.tmLanguage.json' },
    {
      id: 'ruby',
      scopeName: 'source.ruby',
      path: 'ruby.tmLanguage.json',
      samplePath: 'ruby.sample',
      aliases: ['rb'],
      embeddedLangs: ['html', 'xml', 'sql', 'css', 'c', 'javascript', 'shellscript', 'lua']
    },
    { id: 'rust', scopeName: 'source.rust', path: 'rust.tmLanguage.json' },
    { id: 'sas', scopeName: 'source.sas', path: 'sas.tmLanguage.json', embeddedLangs: ['sql'] },
    { id: 'sass', scopeName: 'source.sass', path: 'sass.tmLanguage.json' },
    { id: 'scala', scopeName: 'source.scala', path: 'scala.tmLanguage.json' },
    { id: 'scheme', scopeName: 'source.scheme', path: 'scheme.tmLanguage.json' },
    {
      id: 'scss',
      scopeName: 'source.css.scss',
      path: 'scss.tmLanguage.json',
      embeddedLangs: ['css']
    },
    {
      id: 'shaderlab',
      scopeName: 'source.shaderlab',
      path: 'shaderlab.tmLanguage.json',
      aliases: ['shader'],
      embeddedLangs: ['hlsl']
    },
    {
      id: 'shellscript',
      scopeName: 'source.shell',
      path: 'shellscript.tmLanguage.json',
      aliases: ['shell', 'bash', 'sh', 'zsh'],
      embeddedLangs: ['ruby', 'python', 'applescript', 'html', 'markdown']
    },
    { id: 'smalltalk', scopeName: 'source.smalltalk', path: 'smalltalk.tmLanguage.json' },
    { id: 'solidity', scopeName: 'source.solidity', path: 'solidity.tmLanguage.json' },
    {
      id: 'sparql',
      scopeName: 'source.sparql',
      path: 'sparql.tmLanguage.json',
      samplePath: 'sparql.sample',
      embeddedLangs: ['turtle']
    },
    { id: 'sql', scopeName: 'source.sql', path: 'sql.tmLanguage.json' },
    { id: 'ssh-config', scopeName: 'source.ssh-config', path: 'ssh-config.tmLanguage.json' },
    { id: 'stylus', scopeName: 'source.stylus', path: 'stylus.tmLanguage.json', aliases: ['styl'] },
    {
      id: 'svelte',
      scopeName: 'source.svelte',
      path: 'svelte.tmLanguage.json',
      embeddedLangs: [
        'javascript',
        'typescript',
        'coffee',
        'stylus',
        'sass',
        'css',
        'scss',
        'less',
        'postcss',
        'pug',
        'markdown'
      ]
    },
    { id: 'swift', scopeName: 'source.swift', path: 'swift.tmLanguage.json' },
    {
      id: 'system-verilog',
      scopeName: 'source.systemverilog',
      path: 'system-verilog.tmLanguage.json'
    },
    {
      id: 'tasl',
      scopeName: 'source.tasl',
      path: 'tasl.tmLanguage.json',
      samplePath: 'tasl.sample'
    },
    { id: 'tcl', scopeName: 'source.tcl', path: 'tcl.tmLanguage.json' },
    { id: 'tex', scopeName: 'text.tex', path: 'tex.tmLanguage.json', embeddedLangs: ['r'] },
    { id: 'toml', scopeName: 'source.toml', path: 'toml.tmLanguage.json' },
    { id: 'tsx', scopeName: 'source.tsx', path: 'tsx.tmLanguage.json', samplePath: 'tsx.sample' },
    {
      id: 'turtle',
      scopeName: 'source.turtle',
      path: 'turtle.tmLanguage.json',
      samplePath: 'turtle.sample'
    },
    {
      id: 'twig',
      scopeName: 'text.html.twig',
      path: 'twig.tmLanguage.json',
      embeddedLangs: ['css', 'javascript', 'php', 'python', 'ruby']
    },
    {
      id: 'typescript',
      scopeName: 'source.ts',
      path: 'typescript.tmLanguage.json',
      aliases: ['ts']
    },
    { id: 'vb', scopeName: 'source.asp.vb.net', path: 'vb.tmLanguage.json', aliases: ['cmd'] },
    { id: 'verilog', scopeName: 'source.verilog', path: 'verilog.tmLanguage.json' },
    { id: 'vhdl', scopeName: 'source.vhdl', path: 'vhdl.tmLanguage.json' },
    { id: 'viml', scopeName: 'source.viml', path: 'viml.tmLanguage.json' },
    {
      id: 'vue-html',
      scopeName: 'text.html.vue-html',
      path: 'vue-html.tmLanguage.json',
      embeddedLangs: ['vue', 'javascript']
    },
    {
      id: 'vue',
      scopeName: 'source.vue',
      path: 'vue.tmLanguage.json',
      embeddedLangs: [
        'json',
        'markdown',
        'pug',
        'haml',
        'vue-html',
        'sass',
        'scss',
        'less',
        'stylus',
        'postcss',
        'css',
        'typescript',
        'coffee',
        'javascript'
      ]
    },
    { id: 'wasm', scopeName: 'source.wat', path: 'wasm.tmLanguage.json' },
    { id: 'wenyan', scopeName: 'source.wenyan', path: 'wenyan.tmLanguage.json', aliases: ['文言'] },
    { id: 'xml', scopeName: 'text.xml', path: 'xml.tmLanguage.json', embeddedLangs: ['java'] },
    { id: 'xsl', scopeName: 'text.xml.xsl', path: 'xsl.tmLanguage.json', embeddedLangs: ['xml'] },
    { id: 'yaml', scopeName: 'source.yaml', path: 'yaml.tmLanguage.json' }
  ]
  var n
  ;(e.FontStyle = void 0),
    ((n = e.FontStyle || (e.FontStyle = {}))[(n.NotSet = -1)] = 'NotSet'),
    (n[(n.None = 0)] = 'None'),
    (n[(n.Italic = 1)] = 'Italic'),
    (n[(n.Bold = 2)] = 'Bold'),
    (n[(n.Underline = 4)] = 'Underline')
  class r {
    static toBinaryStr(e) {
      let t = e.toString(2)
      for (; t.length < 32; ) t = '0' + t
      return t
    }
    static printMetadata(e) {
      let t = r.getLanguageId(e),
        n = r.getTokenType(e),
        s = r.getFontStyle(e),
        a = r.getForeground(e),
        o = r.getBackground(e)
      console.log({ languageId: t, tokenType: n, fontStyle: s, foreground: a, background: o })
    }
    static getLanguageId(e) {
      return (255 & e) >>> 0
    }
    static getTokenType(e) {
      return (1792 & e) >>> 8
    }
    static getFontStyle(e) {
      return (14336 & e) >>> 11
    }
    static getForeground(e) {
      return (8372224 & e) >>> 14
    }
    static getBackground(e) {
      return (4286578688 & e) >>> 23
    }
    static set(t, n, s, a, o, i) {
      let c = r.getLanguageId(t),
        u = r.getTokenType(t),
        l = r.getFontStyle(t),
        h = r.getForeground(t),
        p = r.getBackground(t)
      return (
        0 !== n && (c = n),
        0 !== s && (u = 8 === s ? 0 : s),
        a !== e.FontStyle.NotSet && (l = a),
        0 !== o && (h = o),
        0 !== i && (p = i),
        ((c << 0) | (u << 8) | (l << 11) | (h << 14) | (p << 23)) >>> 0
      )
    }
  }
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self && self
  var s,
    a,
    o = {},
    i = {},
    c = { exports: {} }
  ;(s = c),
    'undefined' != typeof document && document.currentScript && document.currentScript.src,
    (a = function (e) {
      var t,
        n,
        r = void 0 !== (e = e || {}) ? e : {},
        s = {}
      for (t in r) r.hasOwnProperty(t) && (s[t] = r[t])
      ;(n = function (e) {
        var t
        return 'function' == typeof readbuffer
          ? new Uint8Array(readbuffer(e))
          : (h('object' == typeof (t = read(e, 'binary'))), t)
      }),
        'undefined' != typeof scriptArgs && scriptArgs,
        'undefined' != typeof print &&
          ('undefined' == typeof console && (console = {}),
          (console.log = print),
          (console.warn = console.error = 'undefined' != typeof printErr ? printErr : print))
      var a,
        o,
        i = r.print || console.log.bind(console),
        c = r.printErr || console.warn.bind(console)
      for (t in s) s.hasOwnProperty(t) && (r[t] = s[t])
      ;(s = null),
        r.arguments,
        r.thisProgram,
        r.quit,
        r.wasmBinary && (a = r.wasmBinary),
        r.noExitRuntime,
        'object' != typeof WebAssembly && c('no native wasm support detected')
      var u = new WebAssembly.Table({ initial: 244, maximum: 244, element: 'anyfunc' }),
        l = !1
      function h(e, t) {
        e || N('Assertion failed: ' + t)
      }
      var p,
        f,
        d,
        g,
        m = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0
      function y(e, t, n) {
        for (var r = t + n, s = t; e[s] && !(s >= r); ) ++s
        if (s - t > 16 && e.subarray && m) return m.decode(e.subarray(t, s))
        for (var a = ''; t < s; ) {
          var o = e[t++]
          if (128 & o) {
            var i = 63 & e[t++]
            if (192 != (224 & o)) {
              var c = 63 & e[t++]
              if (
                (o =
                  224 == (240 & o)
                    ? ((15 & o) << 12) | (i << 6) | c
                    : ((7 & o) << 18) | (i << 12) | (c << 6) | (63 & e[t++])) < 65536
              )
                a += String.fromCharCode(o)
              else {
                var u = o - 65536
                a += String.fromCharCode(55296 | (u >> 10), 56320 | (1023 & u))
              }
            } else a += String.fromCharCode(((31 & o) << 6) | i)
          } else a += String.fromCharCode(o)
        }
        return a
      }
      function v(e, t) {
        return e ? y(d, e, t) : ''
      }
      function _(e, t) {
        return e % t > 0 && (e += t - (e % t)), e
      }
      function b(e) {
        ;(p = e),
          (r.HEAP8 = f = new Int8Array(e)),
          (r.HEAP16 = new Int16Array(e)),
          (r.HEAP32 = g = new Int32Array(e)),
          (r.HEAPU8 = d = new Uint8Array(e)),
          (r.HEAPU16 = new Uint16Array(e)),
          (r.HEAPU32 = new Uint32Array(e)),
          (r.HEAPF32 = new Float32Array(e)),
          (r.HEAPF64 = new Float64Array(e))
      }
      'undefined' != typeof TextDecoder && new TextDecoder('utf-16le')
      var w = r.TOTAL_MEMORY || 157286400
      function k(e) {
        for (; e.length > 0; ) {
          var t = e.shift()
          if ('function' != typeof t) {
            var n = t.func
            'number' == typeof n
              ? void 0 === t.arg
                ? r.dynCall_v(n)
                : r.dynCall_vi(n, t.arg)
              : n(void 0 === t.arg ? null : t.arg)
          } else t()
        }
      }
      ;(o = r.wasmMemory ? r.wasmMemory : new WebAssembly.Memory({ initial: w / 65536 })) &&
        (p = o.buffer),
        (w = p.byteLength),
        b(p),
        (g[66156] = 5507664)
      var L = [],
        x = [],
        j = [],
        C = [],
        S = 0,
        A = null
      function N(e) {
        throw (
          (r.onAbort && r.onAbort(e),
          i((e += '')),
          c(e),
          (l = !0),
          (e = 'abort(' + e + '). Build with -s ASSERTIONS=1 for more info.'),
          new WebAssembly.RuntimeError(e))
        )
      }
      ;(r.preloadedImages = {}), (r.preloadedAudios = {})
      var P = 'data:application/octet-stream;base64,'
      function T(e) {
        return String.prototype.startsWith ? e.startsWith(P) : 0 === e.indexOf(P)
      }
      var R,
        E = 'onigasm.wasm'
      function I() {
        try {
          if (a) return new Uint8Array(a)
          if (n) return n(E)
          throw 'both async and sync fetching of the wasm failed'
        } catch (e) {
          N(e)
        }
      }
      T(E) || ((R = E), (E = r.locateFile ? r.locateFile(R, '') : '' + R)),
        x.push({
          func: function () {
            G()
          }
        })
      var M = {
          buffers: [null, [], []],
          printChar: function (e, t) {
            var n = M.buffers[e]
            0 === t || 10 === t ? ((1 === e ? i : c)(y(n, 0)), (n.length = 0)) : n.push(t)
          },
          varargs: 0,
          get: function (e) {
            return (M.varargs += 4), g[(M.varargs - 4) >> 2]
          },
          getStr: function () {
            return v(M.get())
          },
          get64: function () {
            var e = M.get()
            return M.get(), e
          },
          getZero: function () {
            M.get()
          }
        },
        O = {
          abort: function () {
            N()
          },
          emscripten_get_sbrk_ptr: function () {
            return 264624
          },
          emscripten_memcpy_big: function (e, t, n) {
            d.set(d.subarray(t, t + n), e)
          },
          emscripten_resize_heap: function (e) {
            var t = f.length,
              n = 65536,
              r = 2147418112
            if (e > r) return !1
            for (var s = Math.max(t, 16777216); s < e; )
              s = s <= 536870912 ? _(2 * s, n) : Math.min(_((3 * s + 2147483648) / 4, n), r)
            return !!(function (e) {
              try {
                return o.grow((e - p.byteLength + 65535) >> 16), b(o.buffer), 1
              } catch (e) {}
            })(s)
          },
          fd_close: function (e) {
            try {
              return 0
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || N(e), e.errno
            }
          },
          fd_seek: function (e, t, n, r, s) {
            try {
              return 0
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || N(e), e.errno
            }
          },
          fd_write: function (e, t, n, r) {
            try {
              for (var s = 0, a = 0; a < n; a++) {
                for (var o = g[(t + 8 * a) >> 2], i = g[(t + (8 * a + 4)) >> 2], c = 0; c < i; c++)
                  M.printChar(e, d[o + c])
                s += i
              }
              return (g[r >> 2] = s), 0
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || N(e), e.errno
            }
          },
          memory: o,
          setTempRet0: function (e) {},
          table: u
        },
        D = (function () {
          var e = { env: O, wasi_unstable: O }
          function t(e, t) {
            var n = e.exports
            ;(r.asm = n),
              (function (e) {
                if ((S--, r.monitorRunDependencies && r.monitorRunDependencies(S), 0 == S && A)) {
                  var t = A
                  ;(A = null), t()
                }
              })()
          }
          function n(e) {
            t(e.instance)
          }
          function s(t) {
            return new Promise(function (e, t) {
              e(I())
            })
              .then(function (t) {
                return WebAssembly.instantiate(t, e)
              })
              .then(t, function (e) {
                c('failed to asynchronously prepare wasm: ' + e), N(e)
              })
          }
          if ((S++, r.monitorRunDependencies && r.monitorRunDependencies(S), r.instantiateWasm))
            try {
              return r.instantiateWasm(e, t)
            } catch (e) {
              return c('Module.instantiateWasm callback failed with error: ' + e), !1
            }
          return (
            (function () {
              if (
                a ||
                'function' != typeof WebAssembly.instantiateStreaming ||
                T(E) ||
                'function' != typeof fetch
              )
                return s(n)
              fetch(E, { credentials: 'same-origin' }).then(function (t) {
                return WebAssembly.instantiateStreaming(t, e).then(n, function (e) {
                  c('wasm streaming compile failed: ' + e),
                    c('falling back to ArrayBuffer instantiation'),
                    s(n)
                })
              })
            })(),
            {}
          )
        })()
      r.asm = D
      var G = (r.___wasm_call_ctors = function () {
        return r.asm.__wasm_call_ctors.apply(null, arguments)
      })
      ;(r._malloc = function () {
        return r.asm.malloc.apply(null, arguments)
      }),
        (r._free = function () {
          return r.asm.free.apply(null, arguments)
        }),
        (r._getLastError = function () {
          return r.asm.getLastError.apply(null, arguments)
        }),
        (r._compilePattern = function () {
          return r.asm.compilePattern.apply(null, arguments)
        }),
        (r._disposeCompiledPatterns = function () {
          return r.asm.disposeCompiledPatterns.apply(null, arguments)
        }),
        (r._findBestMatch = function () {
          return r.asm.findBestMatch.apply(null, arguments)
        }),
        (r.___cxa_demangle = function () {
          return r.asm.__cxa_demangle.apply(null, arguments)
        }),
        (r._setThrew = function () {
          return r.asm.setThrew.apply(null, arguments)
        })
      var F,
        B = (r.stackSave = function () {
          return r.asm.stackSave.apply(null, arguments)
        }),
        W = (r.stackAlloc = function () {
          return r.asm.stackAlloc.apply(null, arguments)
        }),
        $ = (r.stackRestore = function () {
          return r.asm.stackRestore.apply(null, arguments)
        })
      function H(e) {
        function t() {
          F ||
            ((F = !0),
            l ||
              (k(x),
              k(j),
              r.onRuntimeInitialized && r.onRuntimeInitialized(),
              (function () {
                if (r.postRun)
                  for (
                    'function' == typeof r.postRun && (r.postRun = [r.postRun]);
                    r.postRun.length;

                  )
                    (e = r.postRun.shift()), C.unshift(e)
                var e
                k(C)
              })()))
        }
        S > 0 ||
          ((function () {
            if (r.preRun)
              for ('function' == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; )
                (e = r.preRun.shift()), L.unshift(e)
            var e
            k(L)
          })(),
          S > 0 ||
            (r.setStatus
              ? (r.setStatus('Running...'),
                setTimeout(function () {
                  setTimeout(function () {
                    r.setStatus('')
                  }, 1),
                    t()
                }, 1))
              : t()))
      }
      if (
        ((r.__growWasmMemory = function () {
          return r.asm.__growWasmMemory.apply(null, arguments)
        }),
        (r.dynCall_vi = function () {
          return r.asm.dynCall_vi.apply(null, arguments)
        }),
        (r.dynCall_iiii = function () {
          return r.asm.dynCall_iiii.apply(null, arguments)
        }),
        (r.dynCall_iiiii = function () {
          return r.asm.dynCall_iiiii.apply(null, arguments)
        }),
        (r.dynCall_iii = function () {
          return r.asm.dynCall_iii.apply(null, arguments)
        }),
        (r.dynCall_iidiiii = function () {
          return r.asm.dynCall_iidiiii.apply(null, arguments)
        }),
        (r.dynCall_vii = function () {
          return r.asm.dynCall_vii.apply(null, arguments)
        }),
        (r.dynCall_ii = function () {
          return r.asm.dynCall_ii.apply(null, arguments)
        }),
        (r.dynCall_i = function () {
          return r.asm.dynCall_i.apply(null, arguments)
        }),
        (r.dynCall_v = function () {
          return r.asm.dynCall_v.apply(null, arguments)
        }),
        (r.dynCall_viiiiii = function () {
          return r.asm.dynCall_viiiiii.apply(null, arguments)
        }),
        (r.dynCall_viiiii = function () {
          return r.asm.dynCall_viiiii.apply(null, arguments)
        }),
        (r.dynCall_viiii = function () {
          return r.asm.dynCall_viiii.apply(null, arguments)
        }),
        (r.dynCall_jiji = function () {
          return r.asm.dynCall_jiji.apply(null, arguments)
        }),
        (r.asm = D),
        (r.ccall = function (e, t, n, s, a) {
          var o = {
              string: function (e) {
                var t = 0
                if (null != e && 0 !== e) {
                  var n = 1 + (e.length << 2)
                  !(function (e, t, n) {
                    !(function (e, t, n, r) {
                      if (!(r > 0)) return 0
                      for (var s = n + r - 1, a = 0; a < e.length; ++a) {
                        var o = e.charCodeAt(a)
                        if (
                          (o >= 55296 &&
                            o <= 57343 &&
                            (o = (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++a))),
                          o <= 127)
                        ) {
                          if (n >= s) break
                          t[n++] = o
                        } else if (o <= 2047) {
                          if (n + 1 >= s) break
                          ;(t[n++] = 192 | (o >> 6)), (t[n++] = 128 | (63 & o))
                        } else if (o <= 65535) {
                          if (n + 2 >= s) break
                          ;(t[n++] = 224 | (o >> 12)),
                            (t[n++] = 128 | ((o >> 6) & 63)),
                            (t[n++] = 128 | (63 & o))
                        } else {
                          if (n + 3 >= s) break
                          ;(t[n++] = 240 | (o >> 18)),
                            (t[n++] = 128 | ((o >> 12) & 63)),
                            (t[n++] = 128 | ((o >> 6) & 63)),
                            (t[n++] = 128 | (63 & o))
                        }
                      }
                      t[n] = 0
                    })(e, d, t, n)
                  })(e, (t = W(n)), n)
                }
                return t
              },
              array: function (e) {
                var t = W(e.length)
                return (
                  (function (e, t) {
                    f.set(e, t)
                  })(e, t),
                  t
                )
              }
            },
            i = (function (e) {
              var t = r['_' + e]
              return h(t, 'Cannot call unknown function ' + e + ', make sure it is exported'), t
            })(e),
            c = [],
            u = 0
          if (s)
            for (var l = 0; l < s.length; l++) {
              var p = o[n[l]]
              p ? (0 === u && (u = B()), (c[l] = p(s[l]))) : (c[l] = s[l])
            }
          var g = i.apply(null, c)
          return (
            (g = (function (e) {
              return 'string' === t ? v(e) : 'boolean' === t ? Boolean(e) : e
            })(g)),
            0 !== u && $(u),
            g
          )
        }),
        (r.then = function (e) {
          if (F) e(r)
          else {
            var t = r.onRuntimeInitialized
            r.onRuntimeInitialized = function () {
              t && t(), e(r)
            }
          }
          return r
        }),
        (A = function e() {
          F || H(), F || (A = e)
        }),
        (r.run = H),
        r.preInit)
      )
        for ('function' == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0; )
          r.preInit.pop()()
      return H(), e
    }),
    (s.exports = a),
    Object.defineProperty(i, '__esModule', { value: !0 })
  const u = c.exports
  async function l(e) {
    return new Promise((t, n) => {
      const { log: r, warn: s, error: a } = console
      u({
        instantiateWasm: (t, n) => (
          WebAssembly.instantiate(e, t)
            .then(e => {
              n(e.instance)
            })
            .catch(e => {
              throw e
            }),
          {}
        )
      }).then(e => {
        ;(i.onigasmH = e), t()
      }),
        'undefined' != typeof print && ((console.log = r), (console.error = a), (console.warn = s))
    })
  }
  let h = !1
  i.loadWASM = async function (e) {
    if (h)
      throw new Error(
        'Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized'
      )
    if ('string' == typeof e) {
      const t = await (await fetch(e)).arrayBuffer()
      await l(t)
    } else {
      if (!(e instanceof ArrayBuffer))
        throw new TypeError(
          'Expected a string (URL of .wasm file) or ArrayBuffer (.wasm file itself) as first parameter'
        )
      await l(e)
    }
    h = !0
  }
  var p = {},
    f = {},
    d = g
  function g(e) {
    var t = this
    if (
      (t instanceof g || (t = new g()),
      (t.tail = null),
      (t.head = null),
      (t.length = 0),
      e && 'function' == typeof e.forEach)
    )
      e.forEach(function (e) {
        t.push(e)
      })
    else if (arguments.length > 0)
      for (var n = 0, r = arguments.length; n < r; n++) t.push(arguments[n])
    return t
  }
  function m(e, t, n) {
    var r = t === e.head ? new _(n, null, t, e) : new _(n, t, t.next, e)
    return null === r.next && (e.tail = r), null === r.prev && (e.head = r), e.length++, r
  }
  function y(e, t) {
    ;(e.tail = new _(t, e.tail, null, e)), e.head || (e.head = e.tail), e.length++
  }
  function v(e, t) {
    ;(e.head = new _(t, null, e.head, e)), e.tail || (e.tail = e.head), e.length++
  }
  function _(e, t, n, r) {
    if (!(this instanceof _)) return new _(e, t, n, r)
    ;(this.list = r),
      (this.value = e),
      t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
      n ? ((n.prev = this), (this.next = n)) : (this.next = null)
  }
  ;(g.Node = _),
    (g.create = g),
    (g.prototype.removeNode = function (e) {
      if (e.list !== this) throw new Error('removing node which does not belong to this list')
      var t = e.next,
        n = e.prev
      return (
        t && (t.prev = n),
        n && (n.next = t),
        e === this.head && (this.head = t),
        e === this.tail && (this.tail = n),
        e.list.length--,
        (e.next = null),
        (e.prev = null),
        (e.list = null),
        t
      )
    }),
    (g.prototype.unshiftNode = function (e) {
      if (e !== this.head) {
        e.list && e.list.removeNode(e)
        var t = this.head
        ;(e.list = this),
          (e.next = t),
          t && (t.prev = e),
          (this.head = e),
          this.tail || (this.tail = e),
          this.length++
      }
    }),
    (g.prototype.pushNode = function (e) {
      if (e !== this.tail) {
        e.list && e.list.removeNode(e)
        var t = this.tail
        ;(e.list = this),
          (e.prev = t),
          t && (t.next = e),
          (this.tail = e),
          this.head || (this.head = e),
          this.length++
      }
    }),
    (g.prototype.push = function () {
      for (var e = 0, t = arguments.length; e < t; e++) y(this, arguments[e])
      return this.length
    }),
    (g.prototype.unshift = function () {
      for (var e = 0, t = arguments.length; e < t; e++) v(this, arguments[e])
      return this.length
    }),
    (g.prototype.pop = function () {
      if (this.tail) {
        var e = this.tail.value
        return (
          (this.tail = this.tail.prev),
          this.tail ? (this.tail.next = null) : (this.head = null),
          this.length--,
          e
        )
      }
    }),
    (g.prototype.shift = function () {
      if (this.head) {
        var e = this.head.value
        return (
          (this.head = this.head.next),
          this.head ? (this.head.prev = null) : (this.tail = null),
          this.length--,
          e
        )
      }
    }),
    (g.prototype.forEach = function (e, t) {
      t = t || this
      for (var n = this.head, r = 0; null !== n; r++) e.call(t, n.value, r, this), (n = n.next)
    }),
    (g.prototype.forEachReverse = function (e, t) {
      t = t || this
      for (var n = this.tail, r = this.length - 1; null !== n; r--)
        e.call(t, n.value, r, this), (n = n.prev)
    }),
    (g.prototype.get = function (e) {
      for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next
      if (t === e && null !== n) return n.value
    }),
    (g.prototype.getReverse = function (e) {
      for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev
      if (t === e && null !== n) return n.value
    }),
    (g.prototype.map = function (e, t) {
      t = t || this
      for (var n = new g(), r = this.head; null !== r; )
        n.push(e.call(t, r.value, this)), (r = r.next)
      return n
    }),
    (g.prototype.mapReverse = function (e, t) {
      t = t || this
      for (var n = new g(), r = this.tail; null !== r; )
        n.push(e.call(t, r.value, this)), (r = r.prev)
      return n
    }),
    (g.prototype.reduce = function (e, t) {
      var n,
        r = this.head
      if (arguments.length > 1) n = t
      else {
        if (!this.head) throw new TypeError('Reduce of empty list with no initial value')
        ;(r = this.head.next), (n = this.head.value)
      }
      for (var s = 0; null !== r; s++) (n = e(n, r.value, s)), (r = r.next)
      return n
    }),
    (g.prototype.reduceReverse = function (e, t) {
      var n,
        r = this.tail
      if (arguments.length > 1) n = t
      else {
        if (!this.tail) throw new TypeError('Reduce of empty list with no initial value')
        ;(r = this.tail.prev), (n = this.tail.value)
      }
      for (var s = this.length - 1; null !== r; s--) (n = e(n, r.value, s)), (r = r.prev)
      return n
    }),
    (g.prototype.toArray = function () {
      for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++)
        (e[t] = n.value), (n = n.next)
      return e
    }),
    (g.prototype.toArrayReverse = function () {
      for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++)
        (e[t] = n.value), (n = n.prev)
      return e
    }),
    (g.prototype.slice = function (e, t) {
      ;(t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length)
      var n = new g()
      if (t < e || t < 0) return n
      e < 0 && (e = 0), t > this.length && (t = this.length)
      for (var r = 0, s = this.head; null !== s && r < e; r++) s = s.next
      for (; null !== s && r < t; r++, s = s.next) n.push(s.value)
      return n
    }),
    (g.prototype.sliceReverse = function (e, t) {
      ;(t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length)
      var n = new g()
      if (t < e || t < 0) return n
      e < 0 && (e = 0), t > this.length && (t = this.length)
      for (var r = this.length, s = this.tail; null !== s && r > t; r--) s = s.prev
      for (; null !== s && r > e; r--, s = s.prev) n.push(s.value)
      return n
    }),
    (g.prototype.splice = function (e, t) {
      e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e)
      for (var n = 0, r = this.head; null !== r && n < e; n++) r = r.next
      var s = []
      for (n = 0; r && n < t; n++) s.push(r.value), (r = this.removeNode(r))
      null === r && (r = this.tail), r !== this.head && r !== this.tail && (r = r.prev)
      for (n = 2; n < arguments.length; n++) r = m(this, r, arguments[n])
      return s
    }),
    (g.prototype.reverse = function () {
      for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
        var r = n.prev
        ;(n.prev = n.next), (n.next = r)
      }
      return (this.head = t), (this.tail = e), this
    })
  try {
    !(function (e) {
      e.prototype[Symbol.iterator] = function* () {
        for (let e = this.head; e; e = e.next) yield e.value
      }
    })(g)
  } catch (e) {}
  const b = d,
    w = Symbol('max'),
    k = Symbol('length'),
    L = Symbol('lengthCalculator'),
    x = Symbol('allowStale'),
    j = Symbol('maxAge'),
    C = Symbol('dispose'),
    S = Symbol('noDisposeOnSet'),
    A = Symbol('lruList'),
    N = Symbol('cache'),
    P = Symbol('updateAgeOnGet'),
    T = () => 1
  const R = (e, t, n) => {
      const r = e[N].get(t)
      if (r) {
        const t = r.value
        if (E(e, t)) {
          if ((M(e, r), !e[x])) return
        } else n && (e[P] && (r.value.now = Date.now()), e[A].unshiftNode(r))
        return t.value
      }
    },
    E = (e, t) => {
      if (!t || (!t.maxAge && !e[j])) return !1
      const n = Date.now() - t.now
      return t.maxAge ? n > t.maxAge : e[j] && n > e[j]
    },
    I = e => {
      if (e[k] > e[w])
        for (let t = e[A].tail; e[k] > e[w] && null !== t; ) {
          const n = t.prev
          M(e, t), (t = n)
        }
    },
    M = (e, t) => {
      if (t) {
        const n = t.value
        e[C] && e[C](n.key, n.value), (e[k] -= n.length), e[N].delete(n.key), e[A].removeNode(t)
      }
    }
  class O {
    constructor(e, t, n, r, s) {
      ;(this.key = e), (this.value = t), (this.length = n), (this.now = r), (this.maxAge = s || 0)
    }
  }
  const D = (e, t, n, r) => {
    let s = n.value
    E(e, s) && (M(e, n), e[x] || (s = void 0)), s && t.call(r, s.value, s.key, e)
  }
  var G = class {
      constructor(e) {
        if (
          ('number' == typeof e && (e = { max: e }),
          e || (e = {}),
          e.max && ('number' != typeof e.max || e.max < 0))
        )
          throw new TypeError('max must be a non-negative number')
        this[w] = e.max || 1 / 0
        const t = e.length || T
        if (
          ((this[L] = 'function' != typeof t ? T : t),
          (this[x] = e.stale || !1),
          e.maxAge && 'number' != typeof e.maxAge)
        )
          throw new TypeError('maxAge must be a number')
        ;(this[j] = e.maxAge || 0),
          (this[C] = e.dispose),
          (this[S] = e.noDisposeOnSet || !1),
          (this[P] = e.updateAgeOnGet || !1),
          this.reset()
      }
      set max(e) {
        if ('number' != typeof e || e < 0) throw new TypeError('max must be a non-negative number')
        ;(this[w] = e || 1 / 0), I(this)
      }
      get max() {
        return this[w]
      }
      set allowStale(e) {
        this[x] = !!e
      }
      get allowStale() {
        return this[x]
      }
      set maxAge(e) {
        if ('number' != typeof e) throw new TypeError('maxAge must be a non-negative number')
        ;(this[j] = e), I(this)
      }
      get maxAge() {
        return this[j]
      }
      set lengthCalculator(e) {
        'function' != typeof e && (e = T),
          e !== this[L] &&
            ((this[L] = e),
            (this[k] = 0),
            this[A].forEach(e => {
              ;(e.length = this[L](e.value, e.key)), (this[k] += e.length)
            })),
          I(this)
      }
      get lengthCalculator() {
        return this[L]
      }
      get length() {
        return this[k]
      }
      get itemCount() {
        return this[A].length
      }
      rforEach(e, t) {
        t = t || this
        for (let n = this[A].tail; null !== n; ) {
          const r = n.prev
          D(this, e, n, t), (n = r)
        }
      }
      forEach(e, t) {
        t = t || this
        for (let n = this[A].head; null !== n; ) {
          const r = n.next
          D(this, e, n, t), (n = r)
        }
      }
      keys() {
        return this[A].toArray().map(e => e.key)
      }
      values() {
        return this[A].toArray().map(e => e.value)
      }
      reset() {
        this[C] && this[A] && this[A].length && this[A].forEach(e => this[C](e.key, e.value)),
          (this[N] = new Map()),
          (this[A] = new b()),
          (this[k] = 0)
      }
      dump() {
        return this[A].map(e => !E(this, e) && { k: e.key, v: e.value, e: e.now + (e.maxAge || 0) })
          .toArray()
          .filter(e => e)
      }
      dumpLru() {
        return this[A]
      }
      set(e, t, n) {
        if ((n = n || this[j]) && 'number' != typeof n)
          throw new TypeError('maxAge must be a number')
        const r = n ? Date.now() : 0,
          s = this[L](t, e)
        if (this[N].has(e)) {
          if (s > this[w]) return M(this, this[N].get(e)), !1
          const a = this[N].get(e).value
          return (
            this[C] && (this[S] || this[C](e, a.value)),
            (a.now = r),
            (a.maxAge = n),
            (a.value = t),
            (this[k] += s - a.length),
            (a.length = s),
            this.get(e),
            I(this),
            !0
          )
        }
        const a = new O(e, t, s, r, n)
        return a.length > this[w]
          ? (this[C] && this[C](e, t), !1)
          : ((this[k] += a.length), this[A].unshift(a), this[N].set(e, this[A].head), I(this), !0)
      }
      has(e) {
        if (!this[N].has(e)) return !1
        const t = this[N].get(e).value
        return !E(this, t)
      }
      get(e) {
        return R(this, e, !0)
      }
      peek(e) {
        return R(this, e, !1)
      }
      pop() {
        const e = this[A].tail
        return e ? (M(this, e), e.value) : null
      }
      del(e) {
        M(this, this[N].get(e))
      }
      load(e) {
        this.reset()
        const t = Date.now()
        for (let n = e.length - 1; n >= 0; n--) {
          const r = e[n],
            s = r.e || 0
          if (0 === s) this.set(r.k, r.v)
          else {
            const e = s - t
            e > 0 && this.set(r.k, r.v, e)
          }
        }
      }
      prune() {
        this[N].forEach((e, t) => R(this, t, !1))
      }
    },
    F = {}
  Object.defineProperty(F, '__esModule', { value: !0 })
  ;(F.default = class {
    constructor(e) {
      if (
        ((this.substring = (e, t) => this.source.substring(e, t)),
        (this.toString = (e, t) => this.source),
        'string' != typeof e)
      )
        throw new TypeError('Argument must be a string')
      ;(this.source = e), (this._utf8Bytes = null), (this._utf8Indexes = null)
    }
    get utf8Bytes() {
      return this._utf8Bytes || this.encode(), this._utf8Bytes
    }
    get utf8Indexes() {
      return this._utf8Bytes || this.encode(), this._utf8Indexes
    }
    get content() {
      return this.source
    }
    get length() {
      return this.source.length
    }
    get hasMultiByteCharacters() {
      return null !== this.utf8Indexes
    }
    convertUtf8OffsetToUtf16(e) {
      if (e < 0) return 0
      if (e >= this._utf8Bytes.length - 1) return this.source.length
      const t = this.utf8Indexes
      return t && e >= this._mappingTableStartOffset
        ? (function (e, t) {
            let n = 0,
              r = e.length
            if (0 === r) return 0
            for (; n < r; ) {
              const s = Math.floor((n + r) / 2)
              e[s] >= t ? (r = s) : (n = s + 1)
            }
            for (; n > 0 && (n >= e.length || e[n] > t); ) n--
            n > 0 && e[n] === e[n - 1] && n--
            return n
          })(t, e - this._mappingTableStartOffset) + this._mappingTableStartOffset
        : e
    }
    convertUtf16OffsetToUtf8(e) {
      if (e < 0) return 0
      const t = this._utf8Bytes
      if (e >= this.source.length) return t.length - 1
      const n = this.utf8Indexes
      return n && e >= this._mappingTableStartOffset
        ? n[e - this._mappingTableStartOffset] + this._mappingTableStartOffset
        : e
    }
    encode() {
      const e = this.source,
        t = e.length
      let n,
        r = 0,
        s = 0
      function a(e) {
        const a = 3 * (t - e)
        ;(n =
          a <= 255
            ? new Uint8Array(t - e)
            : a <= 65535
            ? new Uint16Array(t - e)
            : new Uint32Array(t - e)),
          (s = e),
          (n[r++] = 0)
      }
      const o = new Uint8Array(3 * t + 1)
      let i = 0,
        c = 0
      for (; c < e.length; ) {
        let u
        const l = e.charCodeAt(c)
        if ((n && (n[r++] = i - s), l < 55296 || l > 57343)) u = l
        else if (l >= 56320) u = 65533
        else if (c === t - 1) u = 65533
        else {
          const t = e.charCodeAt(c + 1)
          if (56320 <= t && t <= 57343) {
            n || a(c)
            ;(u = 65536 + ((1023 & l) << 10) + (1023 & t)), (c += 1), (n[r++] = i - s)
          } else u = 65533
        }
        let h, p
        if (
          (u <= 127
            ? ((h = 1), (p = 0))
            : u <= 2047
            ? ((h = 2), (p = 192))
            : u <= 65535
            ? ((h = 3), (p = 224))
            : ((h = 4), (p = 240)),
          1 === h)
        )
          o[i++] = u
        else
          for (n || a(i), o[i++] = (u >> (6 * --h)) + p; h > 0; ) {
            const e = u >> (6 * (h - 1))
            ;(o[i++] = 128 | (63 & e)), (h -= 1)
          }
        c += 1
      }
      const u = o.slice(0, i + 1)
      ;(u[i] = 0),
        (this._utf8Bytes = u),
        n && ((this._utf8Indexes = n), (this._mappingTableStartOffset = s))
    }
  }),
    Object.defineProperty(f, '__esModule', { value: !0 })
  const B = i,
    W = F
  function $(e) {
    const t = B.onigasmH._malloc(e.utf8Bytes.length)
    return B.onigasmH.HEAPU8.set(e.utf8Bytes, t), t
  }
  function H(e) {
    const t = []
    let n = 0
    for (; 0 !== B.onigasmH.HEAPU8[e]; ) t[n++] = B.onigasmH.HEAPU8[e++]
    return t.join()
  }
  const U = new G({
    dispose: (e, t) => {
      const n = B.onigasmH._malloc(t.regexTPtrs.length)
      B.onigasmH.HEAPU8.set(t.regexTPtrs, n)
      if (0 !== B.onigasmH._disposeCompiledPatterns(n, e.patterns.length)) {
        const e = H(B.onigasmH._getLastError())
        throw new Error(e)
      }
      B.onigasmH._free(n)
    },
    max: 1e3
  })
  class q {
    constructor(e) {
      if (null === B.onigasmH)
        throw new Error(
          "Onigasm has not been initialized, call loadWASM from 'onigasm' exports before using any other API"
        )
      for (let t = 0; t < e.length; t++) {
        if ('string' != typeof e[t])
          throw new TypeError(
            'First parameter to OnigScanner constructor must be array of (pattern) strings'
          )
      }
      this.sources = e.slice()
    }
    get patterns() {
      return this.sources.slice()
    }
    findNextMatch(e, t, n) {
      null == t && (t = 0), 'function' == typeof t && ((n = t), (t = 0))
      try {
        n(null, this.findNextMatchSync(e, t))
      } catch (e) {
        n(e)
      }
    }
    findNextMatchSync(e, t) {
      null == t && (t = 0), (t = this.convertToNumber(t))
      let n = U.get(this),
        r = 0
      if (!n) {
        const e = B.onigasmH._malloc(4),
          t = []
        for (let n = 0; n < this.sources.length; n++) {
          const s = this.sources[n],
            a = $(new W.default(s))
          if (((r = B.onigasmH._compilePattern(a, e)), 0 !== r)) {
            const e = H(B.onigasmH._getLastError())
            throw new Error(e)
          }
          const o = B.onigasmH.HEAP32[e / 4]
          t.push(o), B.onigasmH._free(a)
        }
        ;(n = { regexTPtrs: new Uint8Array(Uint32Array.from(t).buffer) }),
          B.onigasmH._free(e),
          U.set(this, n)
      }
      const s = e instanceof W.default ? e : new W.default(this.convertToString(e)),
        a = $(s),
        o = B.onigasmH._malloc(8),
        i = B.onigasmH._malloc(n.regexTPtrs.length)
      if (
        (B.onigasmH.HEAPU8.set(n.regexTPtrs, i),
        (r = B.onigasmH._findBestMatch(
          i,
          this.sources.length,
          a,
          s.utf8Bytes.length - 1,
          s.convertUtf16OffsetToUtf8(t),
          o
        )),
        0 !== r)
      ) {
        const e = H(B.onigasmH._getLastError())
        throw new Error(e)
      }
      const [c, u, l] = new Uint32Array(B.onigasmH.HEAPU32.buffer, o, 3)
      if ((B.onigasmH._free(a), B.onigasmH._free(o), B.onigasmH._free(i), l > 0)) {
        const e = new Uint32Array(B.onigasmH.HEAPU32.buffer, u, l),
          t = []
        let n = 0,
          r = 0
        for (; n < l; ) {
          const a = r++
          let o = e[n++],
            i = e[n++]
          s.hasMultiByteCharacters &&
            ((o = s.convertUtf8OffsetToUtf16(o)), (i = s.convertUtf8OffsetToUtf16(i))),
            t.push({ end: i, index: a, length: i - o, start: o })
        }
        return B.onigasmH._free(u), { captureIndices: t, index: c, scanner: this }
      }
      return null
    }
    convertToString(e) {
      return void 0 === e
        ? 'undefined'
        : null === e
        ? 'null'
        : e instanceof W.default
        ? e.content
        : e.toString()
    }
    convertToNumber(e) {
      return (e = parseInt(e, 10)), isFinite(e) || (e = 0), (e = Math.max(e, 0))
    }
  }
  ;(f.OnigScanner = q), (f.default = q), Object.defineProperty(p, '__esModule', { value: !0 })
  const z = f
  ;(p.default = class {
    constructor(e) {
      this.source = e
      try {
        this.scanner = new z.default([this.source])
      } catch (e) {}
    }
    searchSync(e, t) {
      let n
      return (
        null == t && (t = 0),
        (n = this.scanner.findNextMatchSync(e, t)),
        this.captureIndicesForMatch(e, n)
      )
    }
    search(e, t, n) {
      null == t && (t = 0), 'function' == typeof t && ((n = t), (t = 0))
      try {
        n(null, this.searchSync(e, t))
      } catch (e) {
        n(e)
      }
    }
    testSync(e) {
      return 'boolean' == typeof this.source || 'boolean' == typeof e
        ? this.source === e
        : null != this.searchSync(e)
    }
    test(e, t) {
      'function' != typeof t && (t = () => {})
      try {
        t(null, this.testSync(e))
      } catch (e) {
        t(e)
      }
    }
    captureIndicesForMatch(e, t) {
      if (null != t) {
        const { captureIndices: n } = t
        let r
        e = this.scanner.convertToString(e)
        for (let t = 0; t < n.length; t++) (r = n[t]), (r.match = e.slice(r.start, r.end))
        return n
      }
      return null
    }
  }),
    Object.defineProperty(o, '__esModule', { value: !0 })
  const K = i
  var V = (o.loadWASM = K.loadWASM)
  const X = p
  o.OnigRegExp = X.default
  const Y = f
  var J = (o.OnigScanner = Y.default)
  const Z = F
  var Q,
    ee = (o.OnigString = Z.default)
  function te(e) {
    return e.endsWith('/') || e.endsWith('\\') ? e.slice(0, -1) : e
  }
  function ne(e) {
    return e.startsWith('./') ? e.slice(2) : e
  }
  function re(e, t) {
    void 0 === t && (t = !1)
    var n = e.length,
      r = 0,
      s = '',
      a = 0,
      o = 16,
      i = 0,
      c = 0,
      u = 0,
      l = 0,
      h = 0
    function p(t, n) {
      for (var s = 0, a = 0; s < t || !n; ) {
        var o = e.charCodeAt(r)
        if (o >= 48 && o <= 57) a = 16 * a + o - 48
        else if (o >= 65 && o <= 70) a = 16 * a + o - 65 + 10
        else {
          if (!(o >= 97 && o <= 102)) break
          a = 16 * a + o - 97 + 10
        }
        r++, s++
      }
      return s < t && (a = -1), a
    }
    function f() {
      if (((s = ''), (h = 0), (a = r), (c = i), (l = u), r >= n)) return (a = n), (o = 17)
      var t = e.charCodeAt(r)
      if (se(t)) {
        do {
          r++, (s += String.fromCharCode(t)), (t = e.charCodeAt(r))
        } while (se(t))
        return (o = 15)
      }
      if (ae(t))
        return (
          r++,
          (s += String.fromCharCode(t)),
          13 === t && 10 === e.charCodeAt(r) && (r++, (s += '\n')),
          i++,
          (u = r),
          (o = 14)
        )
      switch (t) {
        case 123:
          return r++, (o = 1)
        case 125:
          return r++, (o = 2)
        case 91:
          return r++, (o = 3)
        case 93:
          return r++, (o = 4)
        case 58:
          return r++, (o = 6)
        case 44:
          return r++, (o = 5)
        case 34:
          return (
            r++,
            (s = (function () {
              for (var t = '', s = r; ; ) {
                if (r >= n) {
                  ;(t += e.substring(s, r)), (h = 2)
                  break
                }
                var a = e.charCodeAt(r)
                if (34 === a) {
                  ;(t += e.substring(s, r)), r++
                  break
                }
                if (92 !== a) {
                  if (a >= 0 && a <= 31) {
                    if (ae(a)) {
                      ;(t += e.substring(s, r)), (h = 2)
                      break
                    }
                    h = 6
                  }
                  r++
                } else {
                  if (((t += e.substring(s, r)), ++r >= n)) {
                    h = 2
                    break
                  }
                  switch (e.charCodeAt(r++)) {
                    case 34:
                      t += '"'
                      break
                    case 92:
                      t += '\\'
                      break
                    case 47:
                      t += '/'
                      break
                    case 98:
                      t += '\b'
                      break
                    case 102:
                      t += '\f'
                      break
                    case 110:
                      t += '\n'
                      break
                    case 114:
                      t += '\r'
                      break
                    case 116:
                      t += '\t'
                      break
                    case 117:
                      var o = p(4, !0)
                      o >= 0 ? (t += String.fromCharCode(o)) : (h = 4)
                      break
                    default:
                      h = 5
                  }
                  s = r
                }
              }
              return t
            })()),
            (o = 10)
          )
        case 47:
          var f = r - 1
          if (47 === e.charCodeAt(r + 1)) {
            for (r += 2; r < n && !ae(e.charCodeAt(r)); ) r++
            return (s = e.substring(f, r)), (o = 12)
          }
          if (42 === e.charCodeAt(r + 1)) {
            r += 2
            for (var g = n - 1, m = !1; r < g; ) {
              var y = e.charCodeAt(r)
              if (42 === y && 47 === e.charCodeAt(r + 1)) {
                ;(r += 2), (m = !0)
                break
              }
              r++, ae(y) && (13 === y && 10 === e.charCodeAt(r) && r++, i++, (u = r))
            }
            return m || (r++, (h = 1)), (s = e.substring(f, r)), (o = 13)
          }
          return (s += String.fromCharCode(t)), r++, (o = 16)
        case 45:
          if (((s += String.fromCharCode(t)), ++r === n || !oe(e.charCodeAt(r)))) return (o = 16)
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return (
            (s += (function () {
              var t = r
              if (48 === e.charCodeAt(r)) r++
              else for (r++; r < e.length && oe(e.charCodeAt(r)); ) r++
              if (r < e.length && 46 === e.charCodeAt(r)) {
                if (!(++r < e.length && oe(e.charCodeAt(r)))) return (h = 3), e.substring(t, r)
                for (r++; r < e.length && oe(e.charCodeAt(r)); ) r++
              }
              var n = r
              if (r < e.length && (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r)))
                if (
                  (((++r < e.length && 43 === e.charCodeAt(r)) || 45 === e.charCodeAt(r)) && r++,
                  r < e.length && oe(e.charCodeAt(r)))
                ) {
                  for (r++; r < e.length && oe(e.charCodeAt(r)); ) r++
                  n = r
                } else h = 3
              return e.substring(t, n)
            })()),
            (o = 11)
          )
        default:
          for (; r < n && d(t); ) r++, (t = e.charCodeAt(r))
          if (a !== r) {
            switch ((s = e.substring(a, r))) {
              case 'true':
                return (o = 8)
              case 'false':
                return (o = 9)
              case 'null':
                return (o = 7)
            }
            return (o = 16)
          }
          return (s += String.fromCharCode(t)), r++, (o = 16)
      }
    }
    function d(e) {
      if (se(e) || ae(e)) return !1
      switch (e) {
        case 125:
        case 93:
        case 123:
        case 91:
        case 34:
        case 58:
        case 44:
        case 47:
          return !1
      }
      return !0
    }
    return {
      setPosition: function (e) {
        ;(r = e), (s = ''), (a = 0), (o = 16), (h = 0)
      },
      getPosition: function () {
        return r
      },
      scan: t
        ? function () {
            var e
            do {
              e = f()
            } while (e >= 12 && e <= 15)
            return e
          }
        : f,
      getToken: function () {
        return o
      },
      getTokenValue: function () {
        return s
      },
      getTokenOffset: function () {
        return a
      },
      getTokenLength: function () {
        return r - a
      },
      getTokenStartLine: function () {
        return c
      },
      getTokenStartCharacter: function () {
        return a - l
      },
      getTokenError: function () {
        return h
      }
    }
  }
  function se(e) {
    return (
      32 === e ||
      9 === e ||
      11 === e ||
      12 === e ||
      160 === e ||
      5760 === e ||
      (e >= 8192 && e <= 8203) ||
      8239 === e ||
      8287 === e ||
      12288 === e ||
      65279 === e
    )
  }
  function ae(e) {
    return 10 === e || 13 === e || 8232 === e || 8233 === e
  }
  function oe(e) {
    return e >= 48 && e <= 57
  }
  !(function (e) {
    e.DEFAULT = { allowTrailingComma: !1 }
  })(Q || (Q = {}))
  var ie = function (e, t, n) {
    void 0 === t && (t = []), void 0 === n && (n = Q.DEFAULT)
    var r = null,
      s = [],
      a = []
    function o(e) {
      Array.isArray(s) ? s.push(e) : null !== r && (s[r] = e)
    }
    return (
      (function (e, t, n) {
        void 0 === n && (n = Q.DEFAULT)
        var r = re(e, !1)
        function s(e) {
          return e
            ? function () {
                return e(
                  r.getTokenOffset(),
                  r.getTokenLength(),
                  r.getTokenStartLine(),
                  r.getTokenStartCharacter()
                )
              }
            : function () {
                return !0
              }
        }
        function a(e) {
          return e
            ? function (t) {
                return e(
                  t,
                  r.getTokenOffset(),
                  r.getTokenLength(),
                  r.getTokenStartLine(),
                  r.getTokenStartCharacter()
                )
              }
            : function () {
                return !0
              }
        }
        var o = s(t.onObjectBegin),
          i = a(t.onObjectProperty),
          c = s(t.onObjectEnd),
          u = s(t.onArrayBegin),
          l = s(t.onArrayEnd),
          h = a(t.onLiteralValue),
          p = a(t.onSeparator),
          f = s(t.onComment),
          d = a(t.onError),
          g = n && n.disallowComments,
          m = n && n.allowTrailingComma
        function y() {
          for (;;) {
            var e = r.scan()
            switch (r.getTokenError()) {
              case 4:
                v(14)
                break
              case 5:
                v(15)
                break
              case 3:
                v(13)
                break
              case 1:
                g || v(11)
                break
              case 2:
                v(12)
                break
              case 6:
                v(16)
            }
            switch (e) {
              case 12:
              case 13:
                g ? v(10) : f()
                break
              case 16:
                v(1)
                break
              case 15:
              case 14:
                break
              default:
                return e
            }
          }
        }
        function v(e, t, n) {
          if ((void 0 === t && (t = []), void 0 === n && (n = []), d(e), t.length + n.length > 0))
            for (var s = r.getToken(); 17 !== s; ) {
              if (-1 !== t.indexOf(s)) {
                y()
                break
              }
              if (-1 !== n.indexOf(s)) break
              s = y()
            }
        }
        function _(e) {
          var t = r.getTokenValue()
          return e ? h(t) : i(t), y(), !0
        }
        function b() {
          switch (r.getToken()) {
            case 11:
              var e = r.getTokenValue(),
                t = Number(e)
              isNaN(t) && (v(2), (t = 0)), h(t)
              break
            case 7:
              h(null)
              break
            case 8:
              h(!0)
              break
            case 9:
              h(!1)
              break
            default:
              return !1
          }
          return y(), !0
        }
        function w() {
          return 10 !== r.getToken()
            ? (v(3, [], [2, 5]), !1)
            : (_(!1),
              6 === r.getToken() ? (p(':'), y(), x() || v(4, [], [2, 5])) : v(5, [], [2, 5]),
              !0)
        }
        function k() {
          o(), y()
          for (var e = !1; 2 !== r.getToken() && 17 !== r.getToken(); ) {
            if (5 === r.getToken()) {
              if ((e || v(4, [], []), p(','), y(), 2 === r.getToken() && m)) break
            } else e && v(6, [], [])
            w() || v(4, [], [2, 5]), (e = !0)
          }
          return c(), 2 !== r.getToken() ? v(7, [2], []) : y(), !0
        }
        function L() {
          u(), y()
          for (var e = !1; 4 !== r.getToken() && 17 !== r.getToken(); ) {
            if (5 === r.getToken()) {
              if ((e || v(4, [], []), p(','), y(), 4 === r.getToken() && m)) break
            } else e && v(6, [], [])
            x() || v(4, [], [4, 5]), (e = !0)
          }
          return l(), 4 !== r.getToken() ? v(8, [4], []) : y(), !0
        }
        function x() {
          switch (r.getToken()) {
            case 3:
              return L()
            case 1:
              return k()
            case 10:
              return _(!0)
            default:
              return b()
          }
        }
        if ((y(), 17 === r.getToken())) return !!n.allowEmptyContent || (v(4, [], []), !1)
        if (!x()) return v(4, [], []), !1
        17 !== r.getToken() && v(9, [], [])
      })(
        e,
        {
          onObjectBegin: function () {
            var e = {}
            o(e), a.push(s), (s = e), (r = null)
          },
          onObjectProperty: function (e) {
            r = e
          },
          onObjectEnd: function () {
            s = a.pop()
          },
          onArrayBegin: function () {
            var e = []
            o(e), a.push(s), (s = e), (r = null)
          },
          onArrayEnd: function () {
            s = a.pop()
          },
          onLiteralValue: o,
          onError: function (e, n, r) {
            t.push({ error: e, offset: n, length: r })
          }
        },
        n
      ),
      s[0]
    )
  }
  const ce =
    ('undefined' != typeof self && void 0 !== self.WorkerGlobalScope) ||
    ('undefined' != typeof window && void 0 !== window.document && 'undefined' != typeof fetch)
  let ue = 'https://cdn.jsdelivr.net/npm/shiki@0.9.11/',
    le = ''
  let he = null
  function pe(e) {
    if (ce)
      return (
        ue ||
          console.warn(
            '[Shiki] no CDN provider found, use `setCDN()` to specify the CDN for loading the resources before calling `getHighlighter()`'
          ),
        `${ue}${e}`
      )
    {
      const t = require('path')
      return t.isAbsolute(e) ? e : t.resolve(__dirname, '..', e)
    }
  }
  async function fe(e) {
    const t = [],
      n = ie(
        await (async function (e) {
          const t = pe(e)
          if (ce) return await fetch(t).then(e => e.text())
          {
            const e = require('fs')
            return await e.promises.readFile(t, 'utf-8')
          }
        })(e),
        t,
        { allowTrailingComma: !0 }
      )
    if (t.length) throw t[0]
    return n
  }
  async function de(e) {
    const t = ge(await fe(e))
    if (t.include) {
      const n = await de(
        (function (...e) {
          return e.map(te).map(ne).join('/')
        })(
          (function (e) {
            const t = e.split(/[\/\\]/g)
            return t[t.length - 2]
          })(e),
          t.include
        )
      )
      n.settings && (t.settings = n.settings.concat(t.settings)),
        n.bg && !t.bg && (t.bg = n.bg),
        n.colors && (t.colors = Object.assign(Object.assign({}, n.colors), t.colors)),
        delete t.include
    }
    return t
  }
  function ge(e) {
    const t = e.type || 'dark',
      n = Object.assign(
        Object.assign({ name: e.name, type: t }, e),
        (function (e) {
          var t, n, r, s, a, o
          let i,
            c,
            u = e.settings ? e.settings : e.tokenColors
          const l = u ? u.find(e => !e.name && !e.scope) : void 0
          ;(null === (t = null == l ? void 0 : l.settings) || void 0 === t
            ? void 0
            : t.foreground) && (i = l.settings.foreground)
          ;(null === (n = null == l ? void 0 : l.settings) || void 0 === n
            ? void 0
            : n.background) && (c = l.settings.background)
          !i &&
            (null === (s = null === (r = e) || void 0 === r ? void 0 : r.colors) || void 0 === s
              ? void 0
              : s['editor.foreground']) &&
            (i = e.colors['editor.foreground'])
          !c &&
            (null === (o = null === (a = e) || void 0 === a ? void 0 : a.colors) || void 0 === o
              ? void 0
              : o['editor.background']) &&
            (c = e.colors['editor.background'])
          i || (i = 'light' === e.type ? me : ye)
          c || (c = 'light' === e.type ? ve : _e)
          return { fg: i, bg: c }
        })(e)
      )
    var r
    return (
      e.include && (n.include = e.include),
      e.tokenColors && ((n.settings = e.tokenColors), delete n.tokenColors),
      (r = n).settings || (r.settings = []),
      (r.settings[0] && r.settings[0].settings && !r.settings[0].scope) ||
        r.settings.unshift({ settings: { foreground: r.fg, background: r.bg } }),
      n
    )
  }
  const me = '#333333',
    ye = '#bbbbbb',
    ve = '#fffffe',
    _e = '#1e1e1e'
  class be {
    constructor(e, t) {
      ;(this.languagesPath = 'languages/'),
        (this.languageMap = {}),
        (this.scopeToLangMap = {}),
        (this._onigLibPromise = e),
        (this._onigLibName = t)
    }
    get onigLib() {
      return this._onigLibPromise
    }
    getOnigLibName() {
      return this._onigLibName
    }
    getLangRegistration(e) {
      return this.languageMap[e]
    }
    async loadGrammar(e) {
      const n = this.scopeToLangMap[e]
      if (!n) return null
      if (n.grammar) return n.grammar
      const r = await (async function (e) {
        return await fe(e)
      })(t.includes(n) ? `${this.languagesPath}${n.path}` : n.path)
      return (n.grammar = r), r
    }
    addLanguage(e) {
      ;(this.languageMap[e.id] = e),
        e.aliases &&
          e.aliases.forEach(t => {
            this.languageMap[t] = e
          }),
        (this.scopeToLangMap[e.scopeName] = e)
    }
  }
  var we = { exports: {} }
  function ke(e, t) {
    let n = []
    for (let r = 0, s = t.length; r < s; r++) {
      let s = t.slice(0, r),
        a = t[r]
      n[r] = { scopeName: a, themeMatches: je(e, a, s) }
    }
    return n
  }
  function Le(e, t) {
    let n = e + '.'
    return e === t || t.substring(0, n.length) === n
  }
  function xe(e, t, n, r) {
    if (!Le(e, n)) return !1
    let s = t.length - 1,
      a = r.length - 1
    for (; s >= 0 && a >= 0; ) Le(t[s], r[a]) && s--, a--
    return -1 === s
  }
  function je(e, t, n) {
    let r = [],
      s = 0
    for (let a = 0, o = e.settings.length; a < o; a++) {
      let o,
        i = e.settings[a]
      if ('string' == typeof i.scope) o = i.scope.split(/,/).map(e => e.trim())
      else {
        if (!Array.isArray(i.scope)) continue
        o = i.scope
      }
      for (let e = 0, a = o.length; e < a; e++) {
        let c = o[e].split(/ /)
        xe(c[c.length - 1], c.slice(0, c.length - 1), t, n) && ((r[s++] = i), (e = a))
      }
    }
    return r
  }
  function Ce(t, n = {}) {
    const r = n.bg || '#fff'
    let s = ''
    return (
      (s += `<pre class="shiki" style="background-color: ${r}">`),
      n.langId && (s += `<div class="language-id">${n.langId}</div>`),
      (s += '<code>'),
      t.forEach(t => {
        ;(s += '<span class="line">'),
          t.forEach(t => {
            const r = [`color: ${t.color || n.fg}`]
            t.fontStyle & e.FontStyle.Italic && r.push('font-style: italic'),
              t.fontStyle & e.FontStyle.Bold && r.push('font-weight: bold'),
              t.fontStyle & e.FontStyle.Underline && r.push('text-decoration: underline'),
              (s += `<span style="${r.join('; ')}">${(function (e) {
                return e.replace(/[&<>"']/g, e => Se[e])
              })(t.content)}</span>`)
          }),
          (s += '</span>\n')
      }),
      (s = s.replace(/\n*$/, '')),
      (s += '</code></pre>'),
      s
    )
  }
  !(function (e, t) {
    e.exports = (function (e) {
      var t = {}
      function n(r) {
        if (t[r]) return t[r].exports
        var s = (t[r] = { i: r, l: !1, exports: {} })
        return e[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }),
        (n.r = function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e
          if (4 & t && 'object' == typeof e && e && e.__esModule) return e
          var r = Object.create(null)
          if (
            (n.r(r),
            Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
            2 & t && 'string' != typeof e)
          )
            for (var s in e)
              n.d(
                r,
                s,
                function (t) {
                  return e[t]
                }.bind(null, s)
              )
          return r
        }),
        (n.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default
                }
              : function () {
                  return e
                }
          return n.d(t, 'a', t), t
        }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (n.p = ''),
        n((n.s = 3))
      )
    })([
      function (e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(1),
          s = n(5),
          a = n(6),
          o = n(2),
          i =
            'undefined' == typeof performance
              ? function () {
                  return Date.now()
                }
              : function () {
                  return performance.now()
                }
        t.createGrammar = function (e, t, n, r, s, a) {
          return new _(e, t, n, r, s, a)
        }
        var c = function (e) {
          this.scopeName = e
        }
        t.FullScopeDependency = c
        var u = (function () {
          function e(e, t) {
            ;(this.scopeName = e), (this.include = t)
          }
          return (
            (e.prototype.toKey = function () {
              return this.scopeName + '#' + this.include
            }),
            e
          )
        })()
        t.PartialScopeDependency = u
        var l = (function () {
          function e() {
            ;(this.full = []),
              (this.partial = []),
              (this.visitedRule = new Set()),
              (this._seenFull = new Set()),
              (this._seenPartial = new Set())
          }
          return (
            (e.prototype.add = function (e) {
              e instanceof c
                ? this._seenFull.has(e.scopeName) ||
                  (this._seenFull.add(e.scopeName), this.full.push(e))
                : this._seenPartial.has(e.toKey()) ||
                  (this._seenPartial.add(e.toKey()), this.partial.push(e))
            }),
            e
          )
        })()
        function h(e, t, n, s, a) {
          for (var o = 0, i = s; o < i.length; o++) {
            var l = i[o]
            if (!e.visitedRule.has(l)) {
              e.visitedRule.add(l)
              var d = l.repository ? r.mergeObjects({}, a, l.repository) : a
              Array.isArray(l.patterns) && h(e, t, n, l.patterns, d)
              var g = l.include
              if (g)
                if ('$base' === g || g === t.scopeName) f(e, t, t)
                else if ('$self' === g || g === n.scopeName) f(e, t, n)
                else if ('#' === g.charAt(0)) p(e, t, n, g.substring(1), d)
                else {
                  var m = g.indexOf('#')
                  if (m >= 0) {
                    var y = g.substring(0, m),
                      v = g.substring(m + 1)
                    y === t.scopeName
                      ? p(e, t, t, v, d)
                      : y === n.scopeName
                      ? p(e, t, n, v, d)
                      : e.add(new u(y, g.substring(m + 1)))
                  } else e.add(new c(g))
                }
            }
          }
        }
        function p(e, t, n, r, s) {
          void 0 === s && (s = n.repository), s && s[r] && h(e, t, n, [s[r]], s)
        }
        function f(e, t, n) {
          if (
            (n.patterns && Array.isArray(n.patterns) && h(e, t, n, n.patterns, n.repository),
            n.injections)
          ) {
            var r = []
            for (var s in n.injections) r.push(n.injections[s])
            h(e, t, n, r, n.repository)
          }
        }
        function d(e, t) {
          if (!e) return !1
          if (e === t) return !0
          var n = t.length
          return e.length > n && e.substr(0, n) === t && '.' === e[n]
        }
        function g(e, t) {
          if (t.length < e.length) return !1
          var n = 0
          return e.every(function (e) {
            for (var r = n; r < t.length; r++) if (d(t[r], e)) return (n = r + 1), !0
            return !1
          })
        }
        function m(e, t, n, r, o) {
          for (
            var i = a.createMatchers(t, g),
              c = s.RuleFactory.getCompiledRuleId(n, r, o.repository),
              u = 0,
              l = i;
            u < l.length;
            u++
          ) {
            var h = l[u]
            e.push({ matcher: h.matcher, ruleId: c, grammar: o, priority: h.priority })
          }
        }
        ;(t.ScopeDependencyCollector = l),
          (t.collectSpecificDependencies = p),
          (t.collectDependencies = f)
        var y = function (e, t, n, r) {
          ;(this.scopeName = e), (this.languageId = t), (this.tokenType = n), (this.themeData = r)
        }
        t.ScopeMetadata = y
        var v = (function () {
            function e(t, n, r) {
              if (
                ((this._initialLanguage = t),
                (this._themeProvider = n),
                (this._cache = new Map()),
                (this._defaultMetaData = new y('', this._initialLanguage, 0, [
                  this._themeProvider.getDefaults()
                ])),
                (this._embeddedLanguages = Object.create(null)),
                r)
              )
                for (var s = Object.keys(r), a = 0, o = s.length; a < o; a++) {
                  var i = s[a],
                    c = r[i]
                  'number' == typeof c && 0 !== c
                    ? (this._embeddedLanguages[i] = c)
                    : console.warn(
                        'Invalid embedded language found at scope ' + i + ': <<' + c + '>>'
                      )
                }
              var u = Object.keys(this._embeddedLanguages).map(function (t) {
                return e._escapeRegExpCharacters(t)
              })
              0 === u.length
                ? (this._embeddedLanguagesRegex = null)
                : (u.sort(),
                  u.reverse(),
                  (this._embeddedLanguagesRegex = new RegExp(
                    '^((' + u.join(')|(') + '))($|\\.)',
                    ''
                  )))
            }
            return (
              (e.prototype.onDidChangeTheme = function () {
                ;(this._cache = new Map()),
                  (this._defaultMetaData = new y('', this._initialLanguage, 0, [
                    this._themeProvider.getDefaults()
                  ]))
              }),
              (e.prototype.getDefaultMetadata = function () {
                return this._defaultMetaData
              }),
              (e._escapeRegExpCharacters = function (e) {
                return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&')
              }),
              (e.prototype.getMetadataForScope = function (t) {
                if (null === t) return e._NULL_SCOPE_METADATA
                var n = this._cache.get(t)
                return n || ((n = this._doGetMetadataForScope(t)), this._cache.set(t, n), n)
              }),
              (e.prototype._doGetMetadataForScope = function (e) {
                var t = this._scopeToLanguage(e),
                  n = this._toStandardTokenType(e),
                  r = this._themeProvider.themeMatch(e)
                return new y(e, t, n, r)
              }),
              (e.prototype._scopeToLanguage = function (e) {
                if (!e) return 0
                if (!this._embeddedLanguagesRegex) return 0
                var t = e.match(this._embeddedLanguagesRegex)
                return (t && (this._embeddedLanguages[t[1]] || 0)) || 0
              }),
              (e.prototype._toStandardTokenType = function (t) {
                var n = t.match(e.STANDARD_TOKEN_TYPE_REGEXP)
                if (!n) return 0
                switch (n[1]) {
                  case 'comment':
                    return 1
                  case 'string':
                    return 2
                  case 'regex':
                    return 4
                  case 'meta.embedded':
                    return 8
                }
                throw new Error('Unexpected match for standard token type!')
              }),
              (e._NULL_SCOPE_METADATA = new y('', 0, 0, null)),
              (e.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/),
              e
            )
          })(),
          _ = (function () {
            function e(e, t, n, r, s, o) {
              if (
                ((this._scopeMetadataProvider = new v(t, s, n)),
                (this._onigLib = o),
                (this._rootId = -1),
                (this._lastRuleId = 0),
                (this._ruleId2desc = [null]),
                (this._includedGrammars = {}),
                (this._grammarRepository = s),
                (this._grammar = w(e, null)),
                (this._injections = null),
                (this._tokenTypeMatchers = []),
                r)
              )
                for (var i = 0, c = Object.keys(r); i < c.length; i++)
                  for (var u = c[i], l = 0, h = a.createMatchers(u, g); l < h.length; l++) {
                    var p = h[l]
                    this._tokenTypeMatchers.push({ matcher: p.matcher, type: r[u] })
                  }
            }
            return (
              (e.prototype.dispose = function () {
                for (var e = 0, t = this._ruleId2desc; e < t.length; e++) {
                  var n = t[e]
                  n && n.dispose()
                }
              }),
              (e.prototype.createOnigScanner = function (e) {
                return this._onigLib.createOnigScanner(e)
              }),
              (e.prototype.createOnigString = function (e) {
                return this._onigLib.createOnigString(e)
              }),
              (e.prototype.onDidChangeTheme = function () {
                this._scopeMetadataProvider.onDidChangeTheme()
              }),
              (e.prototype.getMetadataForScope = function (e) {
                return this._scopeMetadataProvider.getMetadataForScope(e)
              }),
              (e.prototype.getInjections = function () {
                var e = this
                if (null === this._injections) {
                  this._injections = []
                  var t = this._grammar.injections
                  if (t) for (var n in t) m(this._injections, n, t[n], this, this._grammar)
                  if (this._grammarRepository) {
                    var r = this._grammarRepository.injections(this._grammar.scopeName)
                    r &&
                      r.forEach(function (t) {
                        var n = e.getExternalGrammar(t)
                        if (n) {
                          var r = n.injectionSelector
                          r && m(e._injections, r, n, e, n)
                        }
                      })
                  }
                  this._injections.sort(function (e, t) {
                    return e.priority - t.priority
                  })
                }
                return this._injections
              }),
              (e.prototype.registerRule = function (e) {
                var t = ++this._lastRuleId,
                  n = e(t)
                return (this._ruleId2desc[t] = n), n
              }),
              (e.prototype.getRule = function (e) {
                return this._ruleId2desc[e]
              }),
              (e.prototype.getExternalGrammar = function (e, t) {
                if (this._includedGrammars[e]) return this._includedGrammars[e]
                if (this._grammarRepository) {
                  var n = this._grammarRepository.lookup(e)
                  if (n)
                    return (
                      (this._includedGrammars[e] = w(n, t && t.$base)), this._includedGrammars[e]
                    )
                }
                return null
              }),
              (e.prototype.tokenizeLine = function (e, t) {
                var n = this._tokenize(e, t, !1)
                return {
                  tokens: n.lineTokens.getResult(n.ruleStack, n.lineLength),
                  ruleStack: n.ruleStack
                }
              }),
              (e.prototype.tokenizeLine2 = function (e, t) {
                var n = this._tokenize(e, t, !0)
                return {
                  tokens: n.lineTokens.getBinaryResult(n.ruleStack, n.lineLength),
                  ruleStack: n.ruleStack
                }
              }),
              (e.prototype._tokenize = function (e, t, n) {
                var r
                if (
                  (-1 === this._rootId &&
                    (this._rootId = s.RuleFactory.getCompiledRuleId(
                      this._grammar.repository.$self,
                      this,
                      this._grammar.repository
                    )),
                  t && t !== A.NULL)
                )
                  (r = !1), t.reset()
                else {
                  r = !0
                  var a = this._scopeMetadataProvider.getDefaultMetadata(),
                    o = a.themeData[0],
                    i = C.set(
                      0,
                      a.languageId,
                      a.tokenType,
                      o.fontStyle,
                      o.foreground,
                      o.background
                    ),
                    c = this.getRule(this._rootId).getName(null, null),
                    u = this._scopeMetadataProvider.getMetadataForScope(c),
                    l = S.mergeMetadata(i, null, u),
                    h = new S(null, null === c ? 'unknown' : c, l)
                  t = new A(null, this._rootId, -1, -1, !1, null, h, h)
                }
                e += '\n'
                var p = this.createOnigString(e),
                  f = p.content.length,
                  d = new P(n, e, this._tokenTypeMatchers),
                  g = j(this, p, r, 0, t, d, !0)
                return b(p), { lineLength: f, lineTokens: d, ruleStack: g }
              }),
              e
            )
          })()
        function b(e) {
          'function' == typeof e.dispose && e.dispose()
        }
        function w(e, t) {
          return (
            ((e = r.clone(e)).repository = e.repository || {}),
            (e.repository.$self = {
              $vscodeTextmateLocation: e.$vscodeTextmateLocation,
              patterns: e.patterns,
              name: e.scopeName
            }),
            (e.repository.$base = t || e.repository.$self),
            e
          )
        }
        function k(e, t, n, r, s, a, o) {
          if (0 !== a.length) {
            for (
              var i = t.content, c = Math.min(a.length, o.length), u = [], l = o[0].end, h = 0;
              h < c;
              h++
            ) {
              var p = a[h]
              if (null !== p) {
                var f = o[h]
                if (0 !== f.length) {
                  if (f.start > l) break
                  for (; u.length > 0 && u[u.length - 1].endPos <= f.start; )
                    s.produceFromScopes(u[u.length - 1].scopes, u[u.length - 1].endPos), u.pop()
                  if (
                    (u.length > 0
                      ? s.produceFromScopes(u[u.length - 1].scopes, f.start)
                      : s.produce(r, f.start),
                    p.retokenizeCapturedWithRuleId)
                  ) {
                    var d = p.getName(i, o),
                      g = r.contentNameScopesList.push(e, d),
                      m = p.getContentName(i, o),
                      y = g.push(e, m),
                      v = r.push(p.retokenizeCapturedWithRuleId, f.start, -1, !1, null, g, y),
                      _ = e.createOnigString(i.substring(0, f.end))
                    j(e, _, n && 0 === f.start, f.start, v, s, !1), b(_)
                  } else {
                    var w = p.getName(i, o)
                    if (null !== w) {
                      var k = (
                        u.length > 0 ? u[u.length - 1].scopes : r.contentNameScopesList
                      ).push(e, w)
                      u.push(new N(k, f.end))
                    }
                  }
                }
              }
            }
            for (; u.length > 0; )
              s.produceFromScopes(u[u.length - 1].scopes, u[u.length - 1].endPos), u.pop()
          }
        }
        function L(e) {
          for (var t = [], n = 0, r = e.rules.length; n < r; n++)
            t.push('   - ' + e.rules[n] + ': ' + e.debugRegExps[n])
          return t.join('\n')
        }
        function x(e, t, n, r, s, a) {
          var c = (function (e, t, n, r, s, a) {
              var c = s.getRule(e),
                u = c.compile(e, s.endRule, n, r === a),
                l = 0
              o.DebugFlags.InDebugMode && (l = i())
              var h = u.scanner.findNextMatchSync(t, r)
              if (o.DebugFlags.InDebugMode) {
                var p = i() - l
                p > 5 &&
                  console.warn(
                    'Rule ' +
                      c.debugName +
                      ' (' +
                      c.id +
                      ') matching took ' +
                      p +
                      " against '" +
                      t +
                      "'"
                  ),
                  h &&
                    console.log(
                      'matched rule id: ' +
                        u.rules[h.index] +
                        ' from ' +
                        h.captureIndices[0].start +
                        ' to ' +
                        h.captureIndices[0].end
                    )
              }
              return h
                ? { captureIndices: h.captureIndices, matchedRuleId: u.rules[h.index] }
                : null
            })(e, t, n, r, s, a),
            u = e.getInjections()
          if (0 === u.length) return c
          var l = (function (e, t, n, r, s, a, i) {
            for (
              var c,
                u = Number.MAX_VALUE,
                l = null,
                h = 0,
                p = a.contentNameScopesList.generateScopes(),
                f = 0,
                d = e.length;
              f < d;
              f++
            ) {
              var g = e[f]
              if (g.matcher(p)) {
                var m = t.getRule(g.ruleId).compile(t, null, r, s === i),
                  y = m.scanner.findNextMatchSync(n, s)
                if (
                  (o.DebugFlags.InDebugMode &&
                    (console.log('  scanning for injections'), console.log(L(m))),
                  y)
                ) {
                  var v = y.captureIndices[0].start
                  if (
                    !(v >= u) &&
                    ((u = v),
                    (l = y.captureIndices),
                    (c = m.rules[y.index]),
                    (h = g.priority),
                    u === s)
                  )
                    break
                }
              }
            }
            return l ? { priorityMatch: -1 === h, captureIndices: l, matchedRuleId: c } : null
          })(u, e, t, n, r, s, a)
          if (!l) return c
          if (!c) return l
          var h = c.captureIndices[0].start,
            p = l.captureIndices[0].start
          return p < h || (l.priorityMatch && p === h) ? l : c
        }
        function j(e, t, n, r, a, i, c) {
          var u = t.content.length,
            l = !1,
            h = -1
          if (c) {
            var p = (function (e, t, n, r, a, i) {
              for (var c = a.beginRuleCapturedEOL ? 0 : -1, u = [], l = a; l; l = l.pop()) {
                var h = l.getRule(e)
                h instanceof s.BeginWhileRule && u.push({ rule: h, stack: l })
              }
              for (var p = u.pop(); p; p = u.pop()) {
                var f = p.rule.compileWhile(e, p.stack.endRule, n, c === r),
                  d = f.scanner.findNextMatchSync(t, r)
                if (
                  (o.DebugFlags.InDebugMode &&
                    (console.log('  scanning for while rule'), console.log(L(f))),
                  !d)
                ) {
                  o.DebugFlags.InDebugMode &&
                    console.log('  popping ' + p.rule.debugName + ' - ' + p.rule.debugWhileRegExp),
                    (a = p.stack.pop())
                  break
                }
                if (-2 !== f.rules[d.index]) {
                  a = p.stack.pop()
                  break
                }
                d.captureIndices &&
                  d.captureIndices.length &&
                  (i.produce(p.stack, d.captureIndices[0].start),
                  k(e, t, n, p.stack, i, p.rule.whileCaptures, d.captureIndices),
                  i.produce(p.stack, d.captureIndices[0].end),
                  (c = d.captureIndices[0].end),
                  d.captureIndices[0].end > r && ((r = d.captureIndices[0].end), (n = !1)))
              }
              return { stack: a, linePos: r, anchorPosition: c, isFirstLine: n }
            })(e, t, n, r, a, i)
            ;(a = p.stack), (r = p.linePos), (n = p.isFirstLine), (h = p.anchorPosition)
          }
          for (; !l; ) f()
          function f() {
            o.DebugFlags.InDebugMode &&
              (console.log(''),
              console.log(
                '@@scanNext ' + r + ': |' + t.content.substr(r).replace(/\n$/, '\\n') + '|'
              ))
            var c = x(e, t, n, r, a, h)
            if (!c)
              return (
                o.DebugFlags.InDebugMode && console.log('  no more matches.'),
                i.produce(a, u),
                void (l = !0)
              )
            var p = c.captureIndices,
              f = c.matchedRuleId,
              d = !!(p && p.length > 0) && p[0].end > r
            if (-1 === f) {
              var g = a.getRule(e)
              o.DebugFlags.InDebugMode &&
                console.log('  popping ' + g.debugName + ' - ' + g.debugEndRegExp),
                i.produce(a, p[0].start),
                (a = a.setContentNameScopesList(a.nameScopesList)),
                k(e, t, n, a, i, g.endCaptures, p),
                i.produce(a, p[0].end)
              var m = a
              if (((a = a.pop()), (h = m.getAnchorPos()), !d && m.getEnterPos() === r))
                return (
                  o.DebugFlags.InDebugMode &&
                    console.error(
                      '[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing'
                    ),
                  (a = m),
                  i.produce(a, u),
                  void (l = !0)
                )
            } else {
              var y = e.getRule(f)
              i.produce(a, p[0].start)
              var v = a,
                _ = y.getName(t.content, p),
                b = a.contentNameScopesList.push(e, _)
              if (
                ((a = a.push(f, r, h, p[0].end === u, null, b, b)), y instanceof s.BeginEndRule)
              ) {
                var w = y
                o.DebugFlags.InDebugMode &&
                  console.log('  pushing ' + w.debugName + ' - ' + w.debugBeginRegExp),
                  k(e, t, n, a, i, w.beginCaptures, p),
                  i.produce(a, p[0].end),
                  (h = p[0].end)
                var L = w.getContentName(t.content, p),
                  j = b.push(e, L)
                if (
                  ((a = a.setContentNameScopesList(j)),
                  w.endHasBackReferences &&
                    (a = a.setEndRule(w.getEndWithResolvedBackReferences(t.content, p))),
                  !d && v.hasSameRuleAs(a))
                )
                  return (
                    o.DebugFlags.InDebugMode &&
                      console.error(
                        '[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing'
                      ),
                    (a = a.pop()),
                    i.produce(a, u),
                    void (l = !0)
                  )
              } else if (y instanceof s.BeginWhileRule) {
                if (
                  ((w = y),
                  o.DebugFlags.InDebugMode && console.log('  pushing ' + w.debugName),
                  k(e, t, n, a, i, w.beginCaptures, p),
                  i.produce(a, p[0].end),
                  (h = p[0].end),
                  (L = w.getContentName(t.content, p)),
                  (j = b.push(e, L)),
                  (a = a.setContentNameScopesList(j)),
                  w.whileHasBackReferences &&
                    (a = a.setEndRule(w.getWhileWithResolvedBackReferences(t.content, p))),
                  !d && v.hasSameRuleAs(a))
                )
                  return (
                    o.DebugFlags.InDebugMode &&
                      console.error(
                        '[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing'
                      ),
                    (a = a.pop()),
                    i.produce(a, u),
                    void (l = !0)
                  )
              } else {
                var C = y
                if (
                  (o.DebugFlags.InDebugMode &&
                    console.log('  matched ' + C.debugName + ' - ' + C.debugMatchRegExp),
                  k(e, t, n, a, i, C.captures, p),
                  i.produce(a, p[0].end),
                  (a = a.pop()),
                  !d)
                )
                  return (
                    o.DebugFlags.InDebugMode &&
                      console.error(
                        '[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping'
                      ),
                    (a = a.safePop()),
                    i.produce(a, u),
                    void (l = !0)
                  )
              }
            }
            p[0].end > r && ((r = p[0].end), (n = !1))
          }
          return a
        }
        t.Grammar = _
        var C = (function () {
          function e() {}
          return (
            (e.toBinaryStr = function (e) {
              for (var t = e.toString(2); t.length < 32; ) t = '0' + t
              return t
            }),
            (e.printMetadata = function (t) {
              var n = e.getLanguageId(t),
                r = e.getTokenType(t),
                s = e.getFontStyle(t),
                a = e.getForeground(t),
                o = e.getBackground(t)
              console.log({
                languageId: n,
                tokenType: r,
                fontStyle: s,
                foreground: a,
                background: o
              })
            }),
            (e.getLanguageId = function (e) {
              return (255 & e) >>> 0
            }),
            (e.getTokenType = function (e) {
              return (1792 & e) >>> 8
            }),
            (e.getFontStyle = function (e) {
              return (14336 & e) >>> 11
            }),
            (e.getForeground = function (e) {
              return (8372224 & e) >>> 14
            }),
            (e.getBackground = function (e) {
              return (4286578688 & e) >>> 23
            }),
            (e.set = function (t, n, r, s, a, o) {
              var i = e.getLanguageId(t),
                c = e.getTokenType(t),
                u = e.getFontStyle(t),
                l = e.getForeground(t),
                h = e.getBackground(t)
              return (
                0 !== n && (i = n),
                0 !== r && (c = 8 === r ? 0 : r),
                -1 !== s && (u = s),
                0 !== a && (l = a),
                0 !== o && (h = o),
                ((i << 0) | (c << 8) | (u << 11) | (l << 14) | (h << 23)) >>> 0
              )
            }),
            e
          )
        })()
        t.StackElementMetadata = C
        var S = (function () {
          function e(e, t, n) {
            ;(this.parent = e), (this.scope = t), (this.metadata = n)
          }
          return (
            (e._equals = function (e, t) {
              for (;;) {
                if (e === t) return !0
                if (!e && !t) return !0
                if (!e || !t) return !1
                if (e.scope !== t.scope || e.metadata !== t.metadata) return !1
                ;(e = e.parent), (t = t.parent)
              }
            }),
            (e.prototype.equals = function (t) {
              return e._equals(this, t)
            }),
            (e._matchesScope = function (e, t, n) {
              return t === e || e.substring(0, n.length) === n
            }),
            (e._matches = function (e, t) {
              if (null === t) return !0
              for (var n = t.length, r = 0, s = t[r], a = s + '.'; e; ) {
                if (this._matchesScope(e.scope, s, a)) {
                  if (++r === n) return !0
                  a = (s = t[r]) + '.'
                }
                e = e.parent
              }
              return !1
            }),
            (e.mergeMetadata = function (e, t, n) {
              if (null === n) return e
              var r = -1,
                s = 0,
                a = 0
              if (null !== n.themeData)
                for (var o = 0, i = n.themeData.length; o < i; o++) {
                  var c = n.themeData[o]
                  if (this._matches(t, c.parentScopes)) {
                    ;(r = c.fontStyle), (s = c.foreground), (a = c.background)
                    break
                  }
                }
              return C.set(e, n.languageId, n.tokenType, r, s, a)
            }),
            (e._push = function (t, n, r) {
              for (var s = 0, a = r.length; s < a; s++) {
                var o = r[s],
                  i = n.getMetadataForScope(o),
                  c = e.mergeMetadata(t.metadata, t, i)
                t = new e(t, o, c)
              }
              return t
            }),
            (e.prototype.push = function (t, n) {
              return null === n
                ? this
                : n.indexOf(' ') >= 0
                ? e._push(this, t, n.split(/ /g))
                : e._push(this, t, [n])
            }),
            (e._generateScopes = function (e) {
              for (var t = [], n = 0; e; ) (t[n++] = e.scope), (e = e.parent)
              return t.reverse(), t
            }),
            (e.prototype.generateScopes = function () {
              return e._generateScopes(this)
            }),
            e
          )
        })()
        t.ScopeListElement = S
        var A = (function () {
          function e(e, t, n, r, s, a, o, i) {
            ;(this.parent = e),
              (this.depth = this.parent ? this.parent.depth + 1 : 1),
              (this.ruleId = t),
              (this._enterPos = n),
              (this._anchorPos = r),
              (this.beginRuleCapturedEOL = s),
              (this.endRule = a),
              (this.nameScopesList = o),
              (this.contentNameScopesList = i)
          }
          return (
            (e._structuralEquals = function (e, t) {
              for (;;) {
                if (e === t) return !0
                if (!e && !t) return !0
                if (!e || !t) return !1
                if (e.depth !== t.depth || e.ruleId !== t.ruleId || e.endRule !== t.endRule)
                  return !1
                ;(e = e.parent), (t = t.parent)
              }
            }),
            (e._equals = function (e, t) {
              return (
                e === t ||
                (!!this._structuralEquals(e, t) &&
                  e.contentNameScopesList.equals(t.contentNameScopesList))
              )
            }),
            (e.prototype.clone = function () {
              return this
            }),
            (e.prototype.equals = function (t) {
              return null !== t && e._equals(this, t)
            }),
            (e._reset = function (e) {
              for (; e; ) (e._enterPos = -1), (e._anchorPos = -1), (e = e.parent)
            }),
            (e.prototype.reset = function () {
              e._reset(this)
            }),
            (e.prototype.pop = function () {
              return this.parent
            }),
            (e.prototype.safePop = function () {
              return this.parent ? this.parent : this
            }),
            (e.prototype.push = function (t, n, r, s, a, o, i) {
              return new e(this, t, n, r, s, a, o, i)
            }),
            (e.prototype.getEnterPos = function () {
              return this._enterPos
            }),
            (e.prototype.getAnchorPos = function () {
              return this._anchorPos
            }),
            (e.prototype.getRule = function (e) {
              return e.getRule(this.ruleId)
            }),
            (e.prototype._writeString = function (e, t) {
              return (
                this.parent && (t = this.parent._writeString(e, t)),
                (e[t++] =
                  '(' +
                  this.ruleId +
                  ', TODO-' +
                  this.nameScopesList +
                  ', TODO-' +
                  this.contentNameScopesList +
                  ')'),
                t
              )
            }),
            (e.prototype.toString = function () {
              var e = []
              return this._writeString(e, 0), '[' + e.join(',') + ']'
            }),
            (e.prototype.setContentNameScopesList = function (e) {
              return this.contentNameScopesList === e
                ? this
                : this.parent.push(
                    this.ruleId,
                    this._enterPos,
                    this._anchorPos,
                    this.beginRuleCapturedEOL,
                    this.endRule,
                    this.nameScopesList,
                    e
                  )
            }),
            (e.prototype.setEndRule = function (t) {
              return this.endRule === t
                ? this
                : new e(
                    this.parent,
                    this.ruleId,
                    this._enterPos,
                    this._anchorPos,
                    this.beginRuleCapturedEOL,
                    t,
                    this.nameScopesList,
                    this.contentNameScopesList
                  )
            }),
            (e.prototype.hasSameRuleAs = function (e) {
              return this.ruleId === e.ruleId
            }),
            (e.NULL = new e(null, 0, 0, 0, !1, null, null, null)),
            e
          )
        })()
        t.StackElement = A
        var N = function (e, t) {
          ;(this.scopes = e), (this.endPos = t)
        }
        t.LocalStackElement = N
        var P = (function () {
          function e(e, t, n) {
            ;(this._emitBinaryTokens = e),
              (this._tokenTypeOverrides = n),
              o.DebugFlags.InDebugMode ? (this._lineText = t) : (this._lineText = null),
              (this._tokens = []),
              (this._binaryTokens = []),
              (this._lastTokenEndIndex = 0)
          }
          return (
            (e.prototype.produce = function (e, t) {
              this.produceFromScopes(e.contentNameScopesList, t)
            }),
            (e.prototype.produceFromScopes = function (e, t) {
              if (!(this._lastTokenEndIndex >= t)) {
                if (this._emitBinaryTokens) {
                  for (var n = e.metadata, r = 0, s = this._tokenTypeOverrides; r < s.length; r++) {
                    var a = s[r]
                    a.matcher(e.generateScopes()) && (n = C.set(n, 0, T(a.type), -1, 0, 0))
                  }
                  return (
                    (this._binaryTokens.length > 0 &&
                      this._binaryTokens[this._binaryTokens.length - 1] === n) ||
                      (this._binaryTokens.push(this._lastTokenEndIndex),
                      this._binaryTokens.push(n)),
                    void (this._lastTokenEndIndex = t)
                  )
                }
                var i = e.generateScopes()
                if (o.DebugFlags.InDebugMode) {
                  console.log(
                    '  token: |' +
                      this._lineText.substring(this._lastTokenEndIndex, t).replace(/\n$/, '\\n') +
                      '|'
                  )
                  for (var c = 0; c < i.length; c++) console.log('      * ' + i[c])
                }
                this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: t, scopes: i }),
                  (this._lastTokenEndIndex = t)
              }
            }),
            (e.prototype.getResult = function (e, t) {
              return (
                this._tokens.length > 0 &&
                  this._tokens[this._tokens.length - 1].startIndex === t - 1 &&
                  this._tokens.pop(),
                0 === this._tokens.length &&
                  ((this._lastTokenEndIndex = -1),
                  this.produce(e, t),
                  (this._tokens[this._tokens.length - 1].startIndex = 0)),
                this._tokens
              )
            }),
            (e.prototype.getBinaryResult = function (e, t) {
              this._binaryTokens.length > 0 &&
                this._binaryTokens[this._binaryTokens.length - 2] === t - 1 &&
                (this._binaryTokens.pop(), this._binaryTokens.pop()),
                0 === this._binaryTokens.length &&
                  ((this._lastTokenEndIndex = -1),
                  this.produce(e, t),
                  (this._binaryTokens[this._binaryTokens.length - 2] = 0))
              for (
                var n = new Uint32Array(this._binaryTokens.length),
                  r = 0,
                  s = this._binaryTokens.length;
                r < s;
                r++
              )
                n[r] = this._binaryTokens[r]
              return n
            }),
            e
          )
        })()
        function T(e) {
          switch (e) {
            case 4:
              return 4
            case 2:
              return 2
            case 1:
              return 1
            default:
              return 8
          }
        }
      },
      function (e, t, n) {
        function r(e) {
          return Array.isArray(e)
            ? (function (e) {
                for (var t = [], n = 0, s = e.length; n < s; n++) t[n] = r(e[n])
                return t
              })(e)
            : 'object' == typeof e
            ? (function (e) {
                var t = {}
                for (var n in e) t[n] = r(e[n])
                return t
              })(e)
            : e
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.clone = function (e) {
            return r(e)
          }),
          (t.mergeObjects = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
            return (
              t.forEach(function (t) {
                for (var n in t) e[n] = t[n]
              }),
              e
            )
          }),
          (t.basename = function e(t) {
            var n = ~t.lastIndexOf('/') || ~t.lastIndexOf('\\')
            return 0 === n
              ? t
              : ~n == t.length - 1
              ? e(t.substring(0, t.length - 1))
              : t.substr(1 + ~n)
          })
        var s = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/,
          a = (function () {
            function e() {}
            return (
              (e.hasCaptures = function (e) {
                return null !== e && s.test(e)
              }),
              (e.replaceCaptures = function (e, t, n) {
                return e.replace(s, function (e, r, s, a) {
                  var o = n[parseInt(r || s, 10)]
                  if (!o) return e
                  for (var i = t.substring(o.start, o.end); '.' === i[0]; ) i = i.substring(1)
                  switch (a) {
                    case 'downcase':
                      return i.toLowerCase()
                    case 'upcase':
                      return i.toUpperCase()
                    default:
                      return i
                  }
                })
              }),
              e
            )
          })()
        t.RegexSource = a
      },
      function (e, t, n) {
        ;(function (e) {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.DebugFlags = { InDebugMode: void 0 !== e && !!e.env.VSCODE_TEXTMATE_DEBUG })
        }.call(this, n(7)))
      },
      function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (s, a) {
                function o(e) {
                  try {
                    c(r.next(e))
                  } catch (e) {
                    a(e)
                  }
                }
                function i(e) {
                  try {
                    c(r.throw(e))
                  } catch (e) {
                    a(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(o, i)
                }
                c((r = r.apply(e, t || [])).next())
              })
            },
          s =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                s,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & s[0]) throw s[1]
                    return s[1]
                  },
                  trys: [],
                  ops: []
                }
              return (
                (a = { next: i(0), throw: i(1), return: i(2) }),
                'function' == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this
                  }),
                a
              )
              function i(a) {
                return function (i) {
                  return (function (a) {
                    if (n) throw new TypeError('Generator is already executing.')
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (s =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((s = r.return) && s.call(r), 0)
                                : r.next) &&
                            !(s = s.call(r, a[1])).done)
                        )
                          return s
                        switch (((r = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                          case 0:
                          case 1:
                            s = a
                            break
                          case 4:
                            return o.label++, { value: a[1], done: !1 }
                          case 5:
                            o.label++, (r = a[1]), (a = [0])
                            continue
                          case 7:
                            ;(a = o.ops.pop()), o.trys.pop()
                            continue
                          default:
                            if (
                              !(
                                (s = (s = o.trys).length > 0 && s[s.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0
                              continue
                            }
                            if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                              o.label = a[1]
                              break
                            }
                            if (6 === a[0] && o.label < s[1]) {
                              ;(o.label = s[1]), (s = a)
                              break
                            }
                            if (s && o.label < s[2]) {
                              ;(o.label = s[2]), o.ops.push(a)
                              break
                            }
                            s[2] && o.ops.pop(), o.trys.pop()
                            continue
                        }
                        a = t.call(e, o)
                      } catch (e) {
                        ;(a = [6, e]), (r = 0)
                      } finally {
                        n = s = 0
                      }
                    if (5 & a[0]) throw a[1]
                    return { value: a[0] ? a[1] : void 0, done: !0 }
                  })([a, i])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var a = n(4),
          o = n(8),
          i = n(11),
          c = n(0),
          u = (function () {
            function e(e) {
              ;(this._options = e),
                (this._syncRegistry = new a.SyncRegistry(
                  i.Theme.createFromRawTheme(e.theme, e.colorMap),
                  e.onigLib
                )),
                (this._ensureGrammarCache = new Map())
            }
            return (
              (e.prototype.dispose = function () {
                this._syncRegistry.dispose()
              }),
              (e.prototype.setTheme = function (e, t) {
                this._syncRegistry.setTheme(i.Theme.createFromRawTheme(e, t))
              }),
              (e.prototype.getColorMap = function () {
                return this._syncRegistry.getColorMap()
              }),
              (e.prototype.loadGrammarWithEmbeddedLanguages = function (e, t, n) {
                return this.loadGrammarWithConfiguration(e, t, { embeddedLanguages: n })
              }),
              (e.prototype.loadGrammarWithConfiguration = function (e, t, n) {
                return this._loadGrammar(e, t, n.embeddedLanguages, n.tokenTypes)
              }),
              (e.prototype.loadGrammar = function (e) {
                return this._loadGrammar(e, 0, null, null)
              }),
              (e.prototype._doLoadSingleGrammar = function (e) {
                return r(this, void 0, void 0, function () {
                  var t, n
                  return s(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this._options.loadGrammar(e)]
                      case 1:
                        return (
                          (t = r.sent()) &&
                            ((n =
                              'function' == typeof this._options.getInjections
                                ? this._options.getInjections(e)
                                : void 0),
                            this._syncRegistry.addGrammar(t, n)),
                          [2]
                        )
                    }
                  })
                })
              }),
              (e.prototype._loadSingleGrammar = function (e) {
                return r(this, void 0, void 0, function () {
                  return s(this, function (t) {
                    return (
                      this._ensureGrammarCache.has(e) ||
                        this._ensureGrammarCache.set(e, this._doLoadSingleGrammar(e)),
                      [2, this._ensureGrammarCache.get(e)]
                    )
                  })
                })
              }),
              (e.prototype._collectDependenciesForDep = function (e, t, n) {
                var r = this._syncRegistry.lookup(n.scopeName)
                if (r) {
                  n instanceof c.FullScopeDependency
                    ? c.collectDependencies(t, this._syncRegistry.lookup(e), r)
                    : c.collectSpecificDependencies(t, this._syncRegistry.lookup(e), r, n.include)
                  var s = this._syncRegistry.injections(n.scopeName)
                  if (s)
                    for (var a = 0, o = s; a < o.length; a++) {
                      var i = o[a]
                      t.add(new c.FullScopeDependency(i))
                    }
                } else if (n.scopeName === e) throw new Error('No grammar provided for <' + e + '>')
              }),
              (e.prototype._loadGrammar = function (e, t, n, a) {
                return r(this, void 0, void 0, function () {
                  var r,
                    o,
                    i,
                    u,
                    l,
                    h,
                    p,
                    f,
                    d,
                    g,
                    m,
                    y,
                    v = this
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        ;(r = new Set()),
                          (o = new Set()),
                          r.add(e),
                          (i = [new c.FullScopeDependency(e)]),
                          (s.label = 1)
                      case 1:
                        return i.length > 0
                          ? ((u = i),
                            (i = []),
                            [
                              4,
                              Promise.all(
                                u.map(function (e) {
                                  return v._loadSingleGrammar(e.scopeName)
                                })
                              )
                            ])
                          : [3, 3]
                      case 2:
                        for (
                          s.sent(), l = new c.ScopeDependencyCollector(), h = 0, p = u;
                          h < p.length;
                          h++
                        )
                          (y = p[h]), this._collectDependenciesForDep(e, l, y)
                        for (f = 0, d = l.full; f < d.length; f++)
                          (y = d[f]), r.has(y.scopeName) || (r.add(y.scopeName), i.push(y))
                        for (g = 0, m = l.partial; g < m.length; g++)
                          (y = m[g]),
                            r.has(y.scopeName) || o.has(y.toKey()) || (o.add(y.toKey()), i.push(y))
                        return [3, 1]
                      case 3:
                        return [2, this.grammarForScopeName(e, t, n, a)]
                    }
                  })
                })
              }),
              (e.prototype.addGrammar = function (e, t, n, a) {
                return (
                  void 0 === t && (t = []),
                  void 0 === n && (n = 0),
                  void 0 === a && (a = null),
                  r(this, void 0, void 0, function () {
                    return s(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            this._syncRegistry.addGrammar(e, t),
                            [4, this.grammarForScopeName(e.scopeName, n, a)]
                          )
                        case 1:
                          return [2, r.sent()]
                      }
                    })
                  })
                )
              }),
              (e.prototype.grammarForScopeName = function (e, t, n, r) {
                return (
                  void 0 === t && (t = 0),
                  void 0 === n && (n = null),
                  void 0 === r && (r = null),
                  this._syncRegistry.grammarForScopeName(e, t, n, r)
                )
              }),
              e
            )
          })()
        ;(t.Registry = u),
          (t.INITIAL = c.StackElement.NULL),
          (t.parseRawGrammar = o.parseRawGrammar)
      },
      function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (s, a) {
                function o(e) {
                  try {
                    c(r.next(e))
                  } catch (e) {
                    a(e)
                  }
                }
                function i(e) {
                  try {
                    c(r.throw(e))
                  } catch (e) {
                    a(e)
                  }
                }
                function c(e) {
                  var t
                  e.done
                    ? s(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t)
                          })).then(o, i)
                }
                c((r = r.apply(e, t || [])).next())
              })
            },
          s =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                s,
                a,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & s[0]) throw s[1]
                    return s[1]
                  },
                  trys: [],
                  ops: []
                }
              return (
                (a = { next: i(0), throw: i(1), return: i(2) }),
                'function' == typeof Symbol &&
                  (a[Symbol.iterator] = function () {
                    return this
                  }),
                a
              )
              function i(a) {
                return function (i) {
                  return (function (a) {
                    if (n) throw new TypeError('Generator is already executing.')
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (s =
                              2 & a[0]
                                ? r.return
                                : a[0]
                                ? r.throw || ((s = r.return) && s.call(r), 0)
                                : r.next) &&
                            !(s = s.call(r, a[1])).done)
                        )
                          return s
                        switch (((r = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                          case 0:
                          case 1:
                            s = a
                            break
                          case 4:
                            return o.label++, { value: a[1], done: !1 }
                          case 5:
                            o.label++, (r = a[1]), (a = [0])
                            continue
                          case 7:
                            ;(a = o.ops.pop()), o.trys.pop()
                            continue
                          default:
                            if (
                              !(
                                (s = (s = o.trys).length > 0 && s[s.length - 1]) ||
                                (6 !== a[0] && 2 !== a[0])
                              )
                            ) {
                              o = 0
                              continue
                            }
                            if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                              o.label = a[1]
                              break
                            }
                            if (6 === a[0] && o.label < s[1]) {
                              ;(o.label = s[1]), (s = a)
                              break
                            }
                            if (s && o.label < s[2]) {
                              ;(o.label = s[2]), o.ops.push(a)
                              break
                            }
                            s[2] && o.ops.pop(), o.trys.pop()
                            continue
                        }
                        a = t.call(e, o)
                      } catch (e) {
                        ;(a = [6, e]), (r = 0)
                      } finally {
                        n = s = 0
                      }
                    if (5 & a[0]) throw a[1]
                    return { value: a[0] ? a[1] : void 0, done: !0 }
                  })([a, i])
                }
              }
            }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var a = n(0),
          o = (function () {
            function e(e, t) {
              ;(this._theme = e),
                (this._grammars = {}),
                (this._rawGrammars = {}),
                (this._injectionGrammars = {}),
                (this._onigLibPromise = t)
            }
            return (
              (e.prototype.dispose = function () {
                for (var e in this._grammars)
                  this._grammars.hasOwnProperty(e) && this._grammars[e].dispose()
              }),
              (e.prototype.setTheme = function (e) {
                var t = this
                ;(this._theme = e),
                  Object.keys(this._grammars).forEach(function (e) {
                    t._grammars[e].onDidChangeTheme()
                  })
              }),
              (e.prototype.getColorMap = function () {
                return this._theme.getColorMap()
              }),
              (e.prototype.addGrammar = function (e, t) {
                ;(this._rawGrammars[e.scopeName] = e),
                  t && (this._injectionGrammars[e.scopeName] = t)
              }),
              (e.prototype.lookup = function (e) {
                return this._rawGrammars[e]
              }),
              (e.prototype.injections = function (e) {
                return this._injectionGrammars[e]
              }),
              (e.prototype.getDefaults = function () {
                return this._theme.getDefaults()
              }),
              (e.prototype.themeMatch = function (e) {
                return this._theme.match(e)
              }),
              (e.prototype.grammarForScopeName = function (e, t, n, o) {
                return r(this, void 0, void 0, function () {
                  var r, i, c, u, l
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        return this._grammars[e]
                          ? [3, 2]
                          : (r = this._rawGrammars[e])
                          ? ((i = this._grammars),
                            (c = e),
                            (u = a.createGrammar),
                            (l = [r, t, n, o, this]),
                            [4, this._onigLibPromise])
                          : [2, null]
                      case 1:
                        ;(i[c] = u.apply(void 0, l.concat([s.sent()]))), (s.label = 2)
                      case 2:
                        return [2, this._grammars[e]]
                    }
                  })
                })
              }),
              e
            )
          })()
        t.SyncRegistry = o
      },
      function (e, t, n) {
        var r,
          s =
            (this && this.__extends) ||
            ((r = function (e, t) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
            }),
            function (e, t) {
              function n() {
                this.constructor = e
              }
              r(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
            })
        Object.defineProperty(t, '__esModule', { value: !0 })
        var a = n(1),
          o = /\\(\d+)/,
          i = /\\(\d+)/g,
          c = (function () {
            function e(e, t, n) {
              ;(this.debugRegExps = t), (this.rules = n), (this.scanner = e.createOnigScanner(t))
            }
            return (
              (e.prototype.dispose = function () {
                'function' == typeof this.scanner.dispose && this.scanner.dispose()
              }),
              e
            )
          })()
        t.CompiledRule = c
        var u = (function () {
          function e(e, t, n, r) {
            ;(this.$location = e),
              (this.id = t),
              (this._name = n || null),
              (this._nameIsCapturing = a.RegexSource.hasCaptures(this._name)),
              (this._contentName = r || null),
              (this._contentNameIsCapturing = a.RegexSource.hasCaptures(this._contentName))
          }
          return (
            Object.defineProperty(e.prototype, 'debugName', {
              get: function () {
                var e = this.$location
                  ? a.basename(this.$location.filename) + ':' + this.$location.line
                  : 'unknown'
                return this.constructor.name + '#' + this.id + ' @ ' + e
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.getName = function (e, t) {
              return this._nameIsCapturing && null !== this._name && null !== e && null !== t
                ? a.RegexSource.replaceCaptures(this._name, e, t)
                : this._name
            }),
            (e.prototype.getContentName = function (e, t) {
              return this._contentNameIsCapturing && null !== this._contentName
                ? a.RegexSource.replaceCaptures(this._contentName, e, t)
                : this._contentName
            }),
            e
          )
        })()
        t.Rule = u
        var l = (function (e) {
          function t(t, n, r, s, a) {
            var o = e.call(this, t, n, r, s) || this
            return (o.retokenizeCapturedWithRuleId = a), o
          }
          return (
            s(t, e),
            (t.prototype.dispose = function () {}),
            (t.prototype.collectPatternsRecursive = function (e, t, n) {
              throw new Error('Not supported!')
            }),
            (t.prototype.compile = function (e, t, n, r) {
              throw new Error('Not supported!')
            }),
            t
          )
        })(u)
        t.CaptureRule = l
        var h = (function () {
          function e(e, t, n) {
            if ((void 0 === n && (n = !0), n))
              if (e) {
                for (var r = e.length, s = 0, a = [], i = !1, c = 0; c < r; c++)
                  if ('\\' === e.charAt(c) && c + 1 < r) {
                    var u = e.charAt(c + 1)
                    'z' === u
                      ? (a.push(e.substring(s, c)), a.push('$(?!\\n)(?<!\\n)'), (s = c + 2))
                      : ('A' !== u && 'G' !== u) || (i = !0),
                      c++
                  }
                ;(this.hasAnchor = i),
                  0 === s
                    ? (this.source = e)
                    : (a.push(e.substring(s, r)), (this.source = a.join('')))
              } else (this.hasAnchor = !1), (this.source = e)
            else (this.hasAnchor = !1), (this.source = e)
            this.hasAnchor
              ? (this._anchorCache = this._buildAnchorCache())
              : (this._anchorCache = null),
              (this.ruleId = t),
              (this.hasBackReferences = o.test(this.source))
          }
          return (
            (e.prototype.clone = function () {
              return new e(this.source, this.ruleId, !0)
            }),
            (e.prototype.setSource = function (e) {
              this.source !== e &&
                ((this.source = e),
                this.hasAnchor && (this._anchorCache = this._buildAnchorCache()))
            }),
            (e.prototype.resolveBackReferences = function (e, t) {
              var n = t.map(function (t) {
                return e.substring(t.start, t.end)
              })
              return (
                (i.lastIndex = 0),
                this.source.replace(i, function (e, t) {
                  return (n[parseInt(t, 10)] || '').replace(
                    /[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,
                    '\\$&'
                  )
                })
              )
            }),
            (e.prototype._buildAnchorCache = function () {
              var e,
                t,
                n,
                r,
                s = [],
                a = [],
                o = [],
                i = []
              for (e = 0, t = this.source.length; e < t; e++)
                (n = this.source.charAt(e)),
                  (s[e] = n),
                  (a[e] = n),
                  (o[e] = n),
                  (i[e] = n),
                  '\\' === n &&
                    e + 1 < t &&
                    ('A' === (r = this.source.charAt(e + 1))
                      ? ((s[e + 1] = '￿'), (a[e + 1] = '￿'), (o[e + 1] = 'A'), (i[e + 1] = 'A'))
                      : 'G' === r
                      ? ((s[e + 1] = '￿'), (a[e + 1] = 'G'), (o[e + 1] = '￿'), (i[e + 1] = 'G'))
                      : ((s[e + 1] = r), (a[e + 1] = r), (o[e + 1] = r), (i[e + 1] = r)),
                    e++)
              return { A0_G0: s.join(''), A0_G1: a.join(''), A1_G0: o.join(''), A1_G1: i.join('') }
            }),
            (e.prototype.resolveAnchors = function (e, t) {
              return this.hasAnchor && this._anchorCache
                ? e
                  ? t
                    ? this._anchorCache.A1_G1
                    : this._anchorCache.A1_G0
                  : t
                  ? this._anchorCache.A0_G1
                  : this._anchorCache.A0_G0
                : this.source
            }),
            e
          )
        })()
        t.RegExpSource = h
        var p = (function () {
          function e() {
            ;(this._items = []),
              (this._hasAnchors = !1),
              (this._cached = null),
              (this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null })
          }
          return (
            (e.prototype.dispose = function () {
              this._disposeCaches()
            }),
            (e.prototype._disposeCaches = function () {
              this._cached && (this._cached.dispose(), (this._cached = null)),
                this._anchorCache.A0_G0 &&
                  (this._anchorCache.A0_G0.dispose(), (this._anchorCache.A0_G0 = null)),
                this._anchorCache.A0_G1 &&
                  (this._anchorCache.A0_G1.dispose(), (this._anchorCache.A0_G1 = null)),
                this._anchorCache.A1_G0 &&
                  (this._anchorCache.A1_G0.dispose(), (this._anchorCache.A1_G0 = null)),
                this._anchorCache.A1_G1 &&
                  (this._anchorCache.A1_G1.dispose(), (this._anchorCache.A1_G1 = null))
            }),
            (e.prototype.push = function (e) {
              this._items.push(e), (this._hasAnchors = this._hasAnchors || e.hasAnchor)
            }),
            (e.prototype.unshift = function (e) {
              this._items.unshift(e), (this._hasAnchors = this._hasAnchors || e.hasAnchor)
            }),
            (e.prototype.length = function () {
              return this._items.length
            }),
            (e.prototype.setSource = function (e, t) {
              this._items[e].source !== t && (this._disposeCaches(), this._items[e].setSource(t))
            }),
            (e.prototype.compile = function (e, t, n) {
              if (this._hasAnchors)
                return t
                  ? n
                    ? (this._anchorCache.A1_G1 ||
                        (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A1_G1)
                    : (this._anchorCache.A1_G0 ||
                        (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A1_G0)
                  : n
                  ? (this._anchorCache.A0_G1 ||
                      (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)),
                    this._anchorCache.A0_G1)
                  : (this._anchorCache.A0_G0 ||
                      (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)),
                    this._anchorCache.A0_G0)
              if (!this._cached) {
                var r = this._items.map(function (e) {
                  return e.source
                })
                this._cached = new c(
                  e,
                  r,
                  this._items.map(function (e) {
                    return e.ruleId
                  })
                )
              }
              return this._cached
            }),
            (e.prototype._resolveAnchors = function (e, t, n) {
              var r = this._items.map(function (e) {
                return e.resolveAnchors(t, n)
              })
              return new c(
                e,
                r,
                this._items.map(function (e) {
                  return e.ruleId
                })
              )
            }),
            e
          )
        })()
        t.RegExpSourceList = p
        var f = (function (e) {
          function t(t, n, r, s, a) {
            var o = e.call(this, t, n, r, null) || this
            return (
              (o._match = new h(s, o.id)), (o.captures = a), (o._cachedCompiledPatterns = null), o
            )
          }
          return (
            s(t, e),
            (t.prototype.dispose = function () {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null))
            }),
            Object.defineProperty(t.prototype, 'debugMatchRegExp', {
              get: function () {
                return '' + this._match.source
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.collectPatternsRecursive = function (e, t, n) {
              t.push(this._match)
            }),
            (t.prototype.compile = function (e, t, n, r) {
              return (
                this._cachedCompiledPatterns ||
                  ((this._cachedCompiledPatterns = new p()),
                  this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0)),
                this._cachedCompiledPatterns.compile(e, n, r)
              )
            }),
            t
          )
        })(u)
        t.MatchRule = f
        var d = (function (e) {
          function t(t, n, r, s, a) {
            var o = e.call(this, t, n, r, s) || this
            return (
              (o.patterns = a.patterns),
              (o.hasMissingPatterns = a.hasMissingPatterns),
              (o._cachedCompiledPatterns = null),
              o
            )
          }
          return (
            s(t, e),
            (t.prototype.dispose = function () {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null))
            }),
            (t.prototype.collectPatternsRecursive = function (e, t, n) {
              var r, s
              for (r = 0, s = this.patterns.length; r < s; r++)
                e.getRule(this.patterns[r]).collectPatternsRecursive(e, t, !1)
            }),
            (t.prototype.compile = function (e, t, n, r) {
              return (
                this._cachedCompiledPatterns ||
                  ((this._cachedCompiledPatterns = new p()),
                  this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0)),
                this._cachedCompiledPatterns.compile(e, n, r)
              )
            }),
            t
          )
        })(u)
        t.IncludeOnlyRule = d
        var g = (function (e) {
          function t(t, n, r, s, a, o, i, c, u, l) {
            var p = e.call(this, t, n, r, s) || this
            return (
              (p._begin = new h(a, p.id)),
              (p.beginCaptures = o),
              (p._end = new h(i || '￿', -1)),
              (p.endHasBackReferences = p._end.hasBackReferences),
              (p.endCaptures = c),
              (p.applyEndPatternLast = u || !1),
              (p.patterns = l.patterns),
              (p.hasMissingPatterns = l.hasMissingPatterns),
              (p._cachedCompiledPatterns = null),
              p
            )
          }
          return (
            s(t, e),
            (t.prototype.dispose = function () {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null))
            }),
            Object.defineProperty(t.prototype, 'debugBeginRegExp', {
              get: function () {
                return '' + this._begin.source
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'debugEndRegExp', {
              get: function () {
                return '' + this._end.source
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.getEndWithResolvedBackReferences = function (e, t) {
              return this._end.resolveBackReferences(e, t)
            }),
            (t.prototype.collectPatternsRecursive = function (e, t, n) {
              if (n) {
                var r,
                  s = void 0
                for (s = 0, r = this.patterns.length; s < r; s++)
                  e.getRule(this.patterns[s]).collectPatternsRecursive(e, t, !1)
              } else t.push(this._begin)
            }),
            (t.prototype.compile = function (e, t, n, r) {
              return (
                this._cachedCompiledPatterns ||
                  ((this._cachedCompiledPatterns = new p()),
                  this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0),
                  this.applyEndPatternLast
                    ? this._cachedCompiledPatterns.push(
                        this._end.hasBackReferences ? this._end.clone() : this._end
                      )
                    : this._cachedCompiledPatterns.unshift(
                        this._end.hasBackReferences ? this._end.clone() : this._end
                      )),
                this._end.hasBackReferences &&
                  (this.applyEndPatternLast
                    ? this._cachedCompiledPatterns.setSource(
                        this._cachedCompiledPatterns.length() - 1,
                        t
                      )
                    : this._cachedCompiledPatterns.setSource(0, t)),
                this._cachedCompiledPatterns.compile(e, n, r)
              )
            }),
            t
          )
        })(u)
        t.BeginEndRule = g
        var m = (function (e) {
          function t(t, n, r, s, a, o, i, c, u) {
            var l = e.call(this, t, n, r, s) || this
            return (
              (l._begin = new h(a, l.id)),
              (l.beginCaptures = o),
              (l.whileCaptures = c),
              (l._while = new h(i, -2)),
              (l.whileHasBackReferences = l._while.hasBackReferences),
              (l.patterns = u.patterns),
              (l.hasMissingPatterns = u.hasMissingPatterns),
              (l._cachedCompiledPatterns = null),
              (l._cachedCompiledWhilePatterns = null),
              l
            )
          }
          return (
            s(t, e),
            (t.prototype.dispose = function () {
              this._cachedCompiledPatterns &&
                (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null)),
                this._cachedCompiledWhilePatterns &&
                  (this._cachedCompiledWhilePatterns.dispose(),
                  (this._cachedCompiledWhilePatterns = null))
            }),
            Object.defineProperty(t.prototype, 'debugBeginRegExp', {
              get: function () {
                return '' + this._begin.source
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'debugWhileRegExp', {
              get: function () {
                return '' + this._while.source
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.getWhileWithResolvedBackReferences = function (e, t) {
              return this._while.resolveBackReferences(e, t)
            }),
            (t.prototype.collectPatternsRecursive = function (e, t, n) {
              if (n) {
                var r,
                  s = void 0
                for (s = 0, r = this.patterns.length; s < r; s++)
                  e.getRule(this.patterns[s]).collectPatternsRecursive(e, t, !1)
              } else t.push(this._begin)
            }),
            (t.prototype.compile = function (e, t, n, r) {
              return (
                this._cachedCompiledPatterns ||
                  ((this._cachedCompiledPatterns = new p()),
                  this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0)),
                this._cachedCompiledPatterns.compile(e, n, r)
              )
            }),
            (t.prototype.compileWhile = function (e, t, n, r) {
              return (
                this._cachedCompiledWhilePatterns ||
                  ((this._cachedCompiledWhilePatterns = new p()),
                  this._cachedCompiledWhilePatterns.push(
                    this._while.hasBackReferences ? this._while.clone() : this._while
                  )),
                this._while.hasBackReferences &&
                  this._cachedCompiledWhilePatterns.setSource(0, t || '￿'),
                this._cachedCompiledWhilePatterns.compile(e, n, r)
              )
            }),
            t
          )
        })(u)
        t.BeginWhileRule = m
        var y = (function () {
          function e() {}
          return (
            (e.createCaptureRule = function (e, t, n, r, s) {
              return e.registerRule(function (e) {
                return new l(t, e, n, r, s)
              })
            }),
            (e.getCompiledRuleId = function (t, n, r) {
              return (
                t.id ||
                  n.registerRule(function (s) {
                    if (((t.id = s), t.match))
                      return new f(
                        t.$vscodeTextmateLocation,
                        t.id,
                        t.name,
                        t.match,
                        e._compileCaptures(t.captures, n, r)
                      )
                    if (void 0 === t.begin) {
                      t.repository && (r = a.mergeObjects({}, r, t.repository))
                      var o = t.patterns
                      return (
                        void 0 === o && t.include && (o = [{ include: t.include }]),
                        new d(
                          t.$vscodeTextmateLocation,
                          t.id,
                          t.name,
                          t.contentName,
                          e._compilePatterns(o, n, r)
                        )
                      )
                    }
                    return t.while
                      ? new m(
                          t.$vscodeTextmateLocation,
                          t.id,
                          t.name,
                          t.contentName,
                          t.begin,
                          e._compileCaptures(t.beginCaptures || t.captures, n, r),
                          t.while,
                          e._compileCaptures(t.whileCaptures || t.captures, n, r),
                          e._compilePatterns(t.patterns, n, r)
                        )
                      : new g(
                          t.$vscodeTextmateLocation,
                          t.id,
                          t.name,
                          t.contentName,
                          t.begin,
                          e._compileCaptures(t.beginCaptures || t.captures, n, r),
                          t.end,
                          e._compileCaptures(t.endCaptures || t.captures, n, r),
                          t.applyEndPatternLast,
                          e._compilePatterns(t.patterns, n, r)
                        )
                  }),
                t.id
              )
            }),
            (e._compileCaptures = function (t, n, r) {
              var s = []
              if (t) {
                var a = 0
                for (var o in t)
                  '$vscodeTextmateLocation' !== o && (c = parseInt(o, 10)) > a && (a = c)
                for (var i = 0; i <= a; i++) s[i] = null
                for (var o in t)
                  if ('$vscodeTextmateLocation' !== o) {
                    var c = parseInt(o, 10),
                      u = 0
                    t[o].patterns && (u = e.getCompiledRuleId(t[o], n, r)),
                      (s[c] = e.createCaptureRule(
                        n,
                        t[o].$vscodeTextmateLocation,
                        t[o].name,
                        t[o].contentName,
                        u
                      ))
                  }
              }
              return s
            }),
            (e._compilePatterns = function (t, n, r) {
              var s = []
              if (t)
                for (var a = 0, o = t.length; a < o; a++) {
                  var i = t[a],
                    c = -1
                  if (i.include)
                    if ('#' === i.include.charAt(0)) {
                      var u = r[i.include.substr(1)]
                      u && (c = e.getCompiledRuleId(u, n, r))
                    } else if ('$base' === i.include || '$self' === i.include)
                      c = e.getCompiledRuleId(r[i.include], n, r)
                    else {
                      var l = null,
                        h = null,
                        p = i.include.indexOf('#')
                      p >= 0
                        ? ((l = i.include.substring(0, p)), (h = i.include.substring(p + 1)))
                        : (l = i.include)
                      var f = n.getExternalGrammar(l, r)
                      if (f)
                        if (h) {
                          var y = f.repository[h]
                          y && (c = e.getCompiledRuleId(y, n, f.repository))
                        } else c = e.getCompiledRuleId(f.repository.$self, n, f.repository)
                    }
                  else c = e.getCompiledRuleId(i, n, r)
                  if (-1 !== c) {
                    var v = n.getRule(c),
                      _ = !1
                    if (
                      ((v instanceof d || v instanceof g || v instanceof m) &&
                        v.hasMissingPatterns &&
                        0 === v.patterns.length &&
                        (_ = !0),
                      _)
                    )
                      continue
                    s.push(c)
                  }
                }
              return { patterns: s, hasMissingPatterns: (t ? t.length : 0) !== s.length }
            }),
            e
          )
        })()
        t.RuleFactory = y
      },
      function (e, t, n) {
        function r(e) {
          return !!e && !!e.match(/[\w\.:]+/)
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createMatchers = function (e, t) {
            for (
              var n,
                s,
                a,
                o = [],
                i =
                  ((a = (s = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec((n = e))),
                  {
                    next: function () {
                      if (!a) return null
                      var e = a[0]
                      return (a = s.exec(n)), e
                    }
                  }),
                c = i.next();
              null !== c;

            ) {
              var u = 0
              if (2 === c.length && ':' === c.charAt(1)) {
                switch (c.charAt(0)) {
                  case 'R':
                    u = 1
                    break
                  case 'L':
                    u = -1
                    break
                  default:
                    console.log('Unknown priority ' + c + ' in scope selector')
                }
                c = i.next()
              }
              var l = p()
              if ((o.push({ matcher: l, priority: u }), ',' !== c)) break
              c = i.next()
            }
            return o
            function h() {
              if ('-' === c) {
                c = i.next()
                var e = h()
                return function (t) {
                  return !!e && !e(t)
                }
              }
              if ('(' === c) {
                c = i.next()
                var n = (function () {
                  for (var e = [], t = p(); t && (e.push(t), '|' === c || ',' === c); ) {
                    do {
                      c = i.next()
                    } while ('|' === c || ',' === c)
                    t = p()
                  }
                  return function (t) {
                    return e.some(function (e) {
                      return e(t)
                    })
                  }
                })()
                return ')' === c && (c = i.next()), n
              }
              if (r(c)) {
                var s = []
                do {
                  s.push(c), (c = i.next())
                } while (r(c))
                return function (e) {
                  return t(s, e)
                }
              }
              return null
            }
            function p() {
              for (var e = [], t = h(); t; ) e.push(t), (t = h())
              return function (t) {
                return e.every(function (e) {
                  return e(t)
                })
              }
            }
          })
      },
      function (e, t) {
        var n,
          r,
          s = (e.exports = {})
        function a() {
          throw new Error('setTimeout has not been defined')
        }
        function o() {
          throw new Error('clearTimeout has not been defined')
        }
        function i(e) {
          if (n === setTimeout) return setTimeout(e, 0)
          if ((n === a || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0)
          try {
            return n(e, 0)
          } catch (t) {
            try {
              return n.call(null, e, 0)
            } catch (t) {
              return n.call(this, e, 0)
            }
          }
        }
        !(function () {
          try {
            n = 'function' == typeof setTimeout ? setTimeout : a
          } catch (e) {
            n = a
          }
          try {
            r = 'function' == typeof clearTimeout ? clearTimeout : o
          } catch (e) {
            r = o
          }
        })()
        var c,
          u = [],
          l = !1,
          h = -1
        function p() {
          l && c && ((l = !1), c.length ? (u = c.concat(u)) : (h = -1), u.length && f())
        }
        function f() {
          if (!l) {
            var e = i(p)
            l = !0
            for (var t = u.length; t; ) {
              for (c = u, u = []; ++h < t; ) c && c[h].run()
              ;(h = -1), (t = u.length)
            }
            ;(c = null),
              (l = !1),
              (function (e) {
                if (r === clearTimeout) return clearTimeout(e)
                if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e)
                try {
                  r(e)
                } catch (t) {
                  try {
                    return r.call(null, e)
                  } catch (t) {
                    return r.call(this, e)
                  }
                }
              })(e)
          }
        }
        function d(e, t) {
          ;(this.fun = e), (this.array = t)
        }
        function g() {}
        ;(s.nextTick = function (e) {
          var t = new Array(arguments.length - 1)
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
          u.push(new d(e, t)), 1 !== u.length || l || i(f)
        }),
          (d.prototype.run = function () {
            this.fun.apply(null, this.array)
          }),
          (s.title = 'browser'),
          (s.browser = !0),
          (s.env = {}),
          (s.argv = []),
          (s.version = ''),
          (s.versions = {}),
          (s.on = g),
          (s.addListener = g),
          (s.once = g),
          (s.off = g),
          (s.removeListener = g),
          (s.removeAllListeners = g),
          (s.emit = g),
          (s.prependListener = g),
          (s.prependOnceListener = g),
          (s.listeners = function (e) {
            return []
          }),
          (s.binding = function (e) {
            throw new Error('process.binding is not supported')
          }),
          (s.cwd = function () {
            return '/'
          }),
          (s.chdir = function (e) {
            throw new Error('process.chdir is not supported')
          }),
          (s.umask = function () {
            return 0
          })
      },
      function (e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = n(9),
          s = n(2),
          a = n(10)
        t.parseRawGrammar = function (e, t) {
          return (
            void 0 === t && (t = null),
            null !== t && /\.json$/.test(t)
              ? (function (e, t) {
                  return s.DebugFlags.InDebugMode ? a.parse(e, t, !0) : JSON.parse(e)
                })(e, t)
              : (function (e, t) {
                  return s.DebugFlags.InDebugMode
                    ? r.parseWithLocation(e, t, '$vscodeTextmateLocation')
                    : r.parse(e)
                })(e, t)
          )
        }
      },
      function (e, t, n) {
        function r(e, t, n) {
          var r = e.length,
            s = 0,
            a = 1,
            o = 0
          function i(t) {
            if (null === n) s += t
            else for (; t > 0; ) 10 === e.charCodeAt(s) ? (s++, a++, (o = 0)) : (s++, o++), t--
          }
          function c(e) {
            null === n ? (s = e) : i(e - s)
          }
          function u() {
            for (; s < r; ) {
              var t = e.charCodeAt(s)
              if (32 !== t && 9 !== t && 13 !== t && 10 !== t) break
              i(1)
            }
          }
          function l(t) {
            return e.substr(s, t.length) === t && (i(t.length), !0)
          }
          function h(t) {
            var n = e.indexOf(t, s)
            c(-1 !== n ? n + t.length : r)
          }
          function p(t) {
            var n = e.indexOf(t, s)
            if (-1 !== n) {
              var a = e.substring(s, n)
              return c(n + t.length), a
            }
            return (a = e.substr(s)), c(r), a
          }
          r > 0 && 65279 === e.charCodeAt(0) && (s = 1)
          var f = 0,
            d = null,
            g = [],
            m = [],
            y = null
          function v(e, t) {
            g.push(f), m.push(d), (f = e), (d = t)
          }
          function _() {
            if (0 === g.length) return b('illegal state stack')
            ;(f = g.pop()), (d = m.pop())
          }
          function b(t) {
            throw new Error('Near offset ' + s + ': ' + t + ' ~~~' + e.substr(s, 50) + '~~~')
          }
          var w,
            k,
            L,
            x = function () {
              if (null === y) return b('missing <key>')
              var e = {}
              null !== n && (e[n] = { filename: t, line: a, char: o }),
                (d[y] = e),
                (y = null),
                v(1, e)
            },
            j = function () {
              if (null === y) return b('missing <key>')
              var e = []
              ;(d[y] = e), (y = null), v(2, e)
            },
            C = function () {
              var e = {}
              null !== n && (e[n] = { filename: t, line: a, char: o }), d.push(e), v(1, e)
            },
            S = function () {
              var e = []
              d.push(e), v(2, e)
            }
          function A() {
            if (1 !== f) return b('unexpected </dict>')
            _()
          }
          function N() {
            return 1 === f || 2 !== f ? b('unexpected </array>') : void _()
          }
          function P(e) {
            if (1 === f) {
              if (null === y) return b('missing <key>')
              ;(d[y] = e), (y = null)
            } else 2 === f ? d.push(e) : (d = e)
          }
          function T(e) {
            if (isNaN(e)) return b('cannot parse float')
            if (1 === f) {
              if (null === y) return b('missing <key>')
              ;(d[y] = e), (y = null)
            } else 2 === f ? d.push(e) : (d = e)
          }
          function R(e) {
            if (isNaN(e)) return b('cannot parse integer')
            if (1 === f) {
              if (null === y) return b('missing <key>')
              ;(d[y] = e), (y = null)
            } else 2 === f ? d.push(e) : (d = e)
          }
          function E(e) {
            if (1 === f) {
              if (null === y) return b('missing <key>')
              ;(d[y] = e), (y = null)
            } else 2 === f ? d.push(e) : (d = e)
          }
          function I(e) {
            if (1 === f) {
              if (null === y) return b('missing <key>')
              ;(d[y] = e), (y = null)
            } else 2 === f ? d.push(e) : (d = e)
          }
          function M(e) {
            if (1 === f) {
              if (null === y) return b('missing <key>')
              ;(d[y] = e), (y = null)
            } else 2 === f ? d.push(e) : (d = e)
          }
          function O(e) {
            if (e.isClosed) return ''
            var t = p('</')
            return (
              h('>'),
              t
                .replace(/&#([0-9]+);/g, function (e, t) {
                  return String.fromCodePoint(parseInt(t, 10))
                })
                .replace(/&#x([0-9a-f]+);/g, function (e, t) {
                  return String.fromCodePoint(parseInt(t, 16))
                })
                .replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function (e) {
                  switch (e) {
                    case '&amp;':
                      return '&'
                    case '&lt;':
                      return '<'
                    case '&gt;':
                      return '>'
                    case '&quot;':
                      return '"'
                    case '&apos;':
                      return "'"
                  }
                  return e
                })
            )
          }
          for (; s < r && (u(), !(s >= r)); ) {
            var D = e.charCodeAt(s)
            if ((i(1), 60 !== D)) return b('expected <')
            if (s >= r) return b('unexpected end of input')
            var G = e.charCodeAt(s)
            if (63 !== G)
              if (33 !== G) {
                if (47 === G) {
                  if ((i(1), u(), l('plist'))) {
                    h('>')
                    continue
                  }
                  if (l('dict')) {
                    h('>'), A()
                    continue
                  }
                  if (l('array')) {
                    h('>'), N()
                    continue
                  }
                  return b('unexpected closed tag')
                }
                var F =
                  ((k = void 0),
                  (L = void 0),
                  (L = !1),
                  47 === (k = p('>')).charCodeAt(k.length - 1) &&
                    ((L = !0), (k = k.substring(0, k.length - 1))),
                  { name: k.trim(), isClosed: L })
                switch (F.name) {
                  case 'dict':
                    1 === f
                      ? x()
                      : 2 === f
                      ? C()
                      : ((d = {}),
                        null !== n && (d[n] = { filename: t, line: a, char: o }),
                        v(1, d)),
                      F.isClosed && A()
                    continue
                  case 'array':
                    1 === f ? j() : 2 === f ? S() : v(2, (d = [])), F.isClosed && N()
                    continue
                  case 'key':
                    ;(w = O(F)),
                      1 !== f ? b('unexpected <key>') : null !== y ? b('too many <key>') : (y = w)
                    continue
                  case 'string':
                    P(O(F))
                    continue
                  case 'real':
                    T(parseFloat(O(F)))
                    continue
                  case 'integer':
                    R(parseInt(O(F), 10))
                    continue
                  case 'date':
                    E(new Date(O(F)))
                    continue
                  case 'data':
                    I(O(F))
                    continue
                  case 'true':
                    O(F), M(!0)
                    continue
                  case 'false':
                    O(F), M(!1)
                    continue
                }
                if (!/^plist/.test(F.name)) return b('unexpected opened tag ' + F.name)
              } else {
                if ((i(1), l('--'))) {
                  h('--\x3e')
                  continue
                }
                h('>')
              }
            else i(1), h('?>')
          }
          return d
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.parseWithLocation = function (e, t, n) {
            return r(e, t, n)
          }),
          (t.parse = function (e) {
            return r(e, null, null)
          })
      },
      function (e, t, n) {
        function r(e, t) {
          throw new Error(
            'Near offset ' + e.pos + ': ' + t + ' ~~~' + e.source.substr(e.pos, 50) + '~~~'
          )
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.parse = function (e, t, n) {
            var i = new s(e),
              c = new a(),
              u = 0,
              l = null,
              h = [],
              p = []
            function f() {
              h.push(u), p.push(l)
            }
            function d() {
              ;(u = h.pop()), (l = p.pop())
            }
            function g(e) {
              r(i, e)
            }
            for (; o(i, c); ) {
              if (0 === u) {
                if ((null !== l && g('too many constructs in root'), 3 === c.type)) {
                  ;(l = {}), n && (l.$vscodeTextmateLocation = c.toLocation(t)), f(), (u = 1)
                  continue
                }
                if (2 === c.type) {
                  ;(l = []), f(), (u = 4)
                  continue
                }
                g('unexpected token in root')
              }
              if (2 === u) {
                if (5 === c.type) {
                  d()
                  continue
                }
                if (7 === c.type) {
                  u = 3
                  continue
                }
                g('expected , or }')
              }
              if (1 === u || 3 === u) {
                if (1 === u && 5 === c.type) {
                  d()
                  continue
                }
                if (1 === c.type) {
                  var m = c.value
                  if (
                    ((o(i, c) && 6 === c.type) || g('expected colon'),
                    o(i, c) || g('expected value'),
                    (u = 2),
                    1 === c.type)
                  ) {
                    l[m] = c.value
                    continue
                  }
                  if (8 === c.type) {
                    l[m] = null
                    continue
                  }
                  if (9 === c.type) {
                    l[m] = !0
                    continue
                  }
                  if (10 === c.type) {
                    l[m] = !1
                    continue
                  }
                  if (11 === c.type) {
                    l[m] = parseFloat(c.value)
                    continue
                  }
                  if (2 === c.type) {
                    var y = []
                    ;(l[m] = y), f(), (u = 4), (l = y)
                    continue
                  }
                  if (3 === c.type) {
                    var v = {}
                    n && (v.$vscodeTextmateLocation = c.toLocation(t)),
                      (l[m] = v),
                      f(),
                      (u = 1),
                      (l = v)
                    continue
                  }
                }
                g('unexpected token in dict')
              }
              if (5 === u) {
                if (4 === c.type) {
                  d()
                  continue
                }
                if (7 === c.type) {
                  u = 6
                  continue
                }
                g('expected , or ]')
              }
              if (4 === u || 6 === u) {
                if (4 === u && 4 === c.type) {
                  d()
                  continue
                }
                if (((u = 5), 1 === c.type)) {
                  l.push(c.value)
                  continue
                }
                if (8 === c.type) {
                  l.push(null)
                  continue
                }
                if (9 === c.type) {
                  l.push(!0)
                  continue
                }
                if (10 === c.type) {
                  l.push(!1)
                  continue
                }
                if (11 === c.type) {
                  l.push(parseFloat(c.value))
                  continue
                }
                if (2 === c.type) {
                  ;(y = []), l.push(y), f(), (u = 4), (l = y)
                  continue
                }
                if (3 === c.type) {
                  ;(v = {}),
                    n && (v.$vscodeTextmateLocation = c.toLocation(t)),
                    l.push(v),
                    f(),
                    (u = 1),
                    (l = v)
                  continue
                }
                g('unexpected token in array')
              }
              g('unknown state')
            }
            return 0 !== p.length && g('unclosed constructs'), l
          })
        var s = function (e) {
            ;(this.source = e),
              (this.pos = 0),
              (this.len = e.length),
              (this.line = 1),
              (this.char = 0)
          },
          a = (function () {
            function e() {
              ;(this.value = null),
                (this.type = 0),
                (this.offset = -1),
                (this.len = -1),
                (this.line = -1),
                (this.char = -1)
            }
            return (
              (e.prototype.toLocation = function (e) {
                return { filename: e, line: this.line, char: this.char }
              }),
              e
            )
          })()
        function o(e, t) {
          ;(t.value = null),
            (t.type = 0),
            (t.offset = -1),
            (t.len = -1),
            (t.line = -1),
            (t.char = -1)
          for (var n, s = e.source, a = e.pos, o = e.len, i = e.line, c = e.char; ; ) {
            if (a >= o) return !1
            if (32 !== (n = s.charCodeAt(a)) && 9 !== n && 13 !== n) {
              if (10 !== n) break
              a++, i++, (c = 0)
            } else a++, c++
          }
          if (((t.offset = a), (t.line = i), (t.char = c), 34 === n)) {
            for (t.type = 1, a++, c++; ; ) {
              if (a >= o) return !1
              if (((n = s.charCodeAt(a)), a++, c++, 92 !== n)) {
                if (34 === n) break
              } else a++, c++
            }
            t.value = s
              .substring(t.offset + 1, a - 1)
              .replace(/\\u([0-9A-Fa-f]{4})/g, function (e, t) {
                return String.fromCodePoint(parseInt(t, 16))
              })
              .replace(/\\(.)/g, function (t, n) {
                switch (n) {
                  case '"':
                    return '"'
                  case '\\':
                    return '\\'
                  case '/':
                    return '/'
                  case 'b':
                    return '\b'
                  case 'f':
                    return '\f'
                  case 'n':
                    return '\n'
                  case 'r':
                    return '\r'
                  case 't':
                    return '\t'
                  default:
                    r(e, 'invalid escape sequence')
                }
                throw new Error('unreachable')
              })
          } else if (91 === n) (t.type = 2), a++, c++
          else if (123 === n) (t.type = 3), a++, c++
          else if (93 === n) (t.type = 4), a++, c++
          else if (125 === n) (t.type = 5), a++, c++
          else if (58 === n) (t.type = 6), a++, c++
          else if (44 === n) (t.type = 7), a++, c++
          else if (110 === n) {
            if (((t.type = 8), a++, c++, 117 !== (n = s.charCodeAt(a)))) return !1
            if ((a++, c++, 108 !== (n = s.charCodeAt(a)))) return !1
            if ((a++, c++, 108 !== (n = s.charCodeAt(a)))) return !1
            a++, c++
          } else if (116 === n) {
            if (((t.type = 9), a++, c++, 114 !== (n = s.charCodeAt(a)))) return !1
            if ((a++, c++, 117 !== (n = s.charCodeAt(a)))) return !1
            if ((a++, c++, 101 !== (n = s.charCodeAt(a)))) return !1
            a++, c++
          } else if (102 === n) {
            if (((t.type = 10), a++, c++, 97 !== (n = s.charCodeAt(a)))) return !1
            if ((a++, c++, 108 !== (n = s.charCodeAt(a)))) return !1
            if ((a++, c++, 115 !== (n = s.charCodeAt(a)))) return !1
            if ((a++, c++, 101 !== (n = s.charCodeAt(a)))) return !1
            a++, c++
          } else
            for (t.type = 11; ; ) {
              if (a >= o) return !1
              if (
                !(
                  46 === (n = s.charCodeAt(a)) ||
                  (n >= 48 && n <= 57) ||
                  101 === n ||
                  69 === n ||
                  45 === n ||
                  43 === n
                )
              )
                break
              a++, c++
            }
          return (
            (t.len = a - t.offset),
            null === t.value && (t.value = s.substr(t.offset, t.len)),
            (e.pos = a),
            (e.line = i),
            (e.char = c),
            !0
          )
        }
      },
      function (e, t, n) {
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = function (e, t, n, r, s, a) {
          ;(this.scope = e),
            (this.parentScopes = t),
            (this.index = n),
            (this.fontStyle = r),
            (this.foreground = s),
            (this.background = a)
        }
        function s(e) {
          return !!(
            /^#[0-9a-f]{6}$/i.test(e) ||
            /^#[0-9a-f]{8}$/i.test(e) ||
            /^#[0-9a-f]{3}$/i.test(e) ||
            /^#[0-9a-f]{4}$/i.test(e)
          )
        }
        function a(e) {
          if (!e) return []
          if (!e.settings || !Array.isArray(e.settings)) return []
          for (var t = e.settings, n = [], a = 0, o = 0, i = t.length; o < i; o++) {
            var c = t[o]
            if (c.settings) {
              var u = void 0
              u =
                'string' == typeof c.scope
                  ? c.scope.replace(/^[,]+/, '').replace(/[,]+$/, '').split(',')
                  : Array.isArray(c.scope)
                  ? c.scope
                  : ['']
              var l = -1
              if ('string' == typeof c.settings.fontStyle) {
                l = 0
                for (var h = 0, p = (g = c.settings.fontStyle.split(' ')).length; h < p; h++)
                  switch (g[h]) {
                    case 'italic':
                      l |= 1
                      break
                    case 'bold':
                      l |= 2
                      break
                    case 'underline':
                      l |= 4
                  }
              }
              var f = null
              'string' == typeof c.settings.foreground &&
                s(c.settings.foreground) &&
                (f = c.settings.foreground)
              var d = null
              for (
                'string' == typeof c.settings.background &&
                  s(c.settings.background) &&
                  (d = c.settings.background),
                  h = 0,
                  p = u.length;
                h < p;
                h++
              ) {
                var g,
                  m = (g = u[h].trim().split(' '))[g.length - 1],
                  y = null
                g.length > 1 && (y = g.slice(0, g.length - 1)).reverse(),
                  (n[a++] = new r(m, y, o, l, f, d))
              }
            }
          }
          return n
        }
        function o(e, t) {
          e.sort(function (e, t) {
            var n = u(e.scope, t.scope)
            return 0 !== n || 0 !== (n = l(e.parentScopes, t.parentScopes)) ? n : e.index - t.index
          })
          for (var n = 0, r = '#000000', s = '#ffffff'; e.length >= 1 && '' === e[0].scope; ) {
            var a = e.shift()
            ;-1 !== a.fontStyle && (n = a.fontStyle),
              null !== a.foreground && (r = a.foreground),
              null !== a.background && (s = a.background)
          }
          for (
            var o = new i(t),
              f = new h(0, null, n, o.getId(r), o.getId(s)),
              d = new p(new h(0, null, -1, 0, 0), []),
              g = 0,
              m = e.length;
            g < m;
            g++
          ) {
            var y = e[g]
            d.insert(
              0,
              y.scope,
              y.parentScopes,
              y.fontStyle,
              o.getId(y.foreground),
              o.getId(y.background)
            )
          }
          return new c(o, f, d)
        }
        ;(t.ParsedThemeRule = r), (t.parseTheme = a)
        var i = (function () {
          function e(e) {
            if (
              ((this._lastColorId = 0),
              (this._id2color = []),
              (this._color2id = Object.create(null)),
              Array.isArray(e))
            ) {
              this._isFrozen = !0
              for (var t = 0, n = e.length; t < n; t++)
                (this._color2id[e[t]] = t), (this._id2color[t] = e[t])
            } else this._isFrozen = !1
          }
          return (
            (e.prototype.getId = function (e) {
              if (null === e) return 0
              e = e.toUpperCase()
              var t = this._color2id[e]
              if (t) return t
              if (this._isFrozen) throw new Error('Missing color in color map - ' + e)
              return (t = ++this._lastColorId), (this._color2id[e] = t), (this._id2color[t] = e), t
            }),
            (e.prototype.getColorMap = function () {
              return this._id2color.slice(0)
            }),
            e
          )
        })()
        t.ColorMap = i
        var c = (function () {
          function e(e, t, n) {
            ;(this._colorMap = e), (this._root = n), (this._defaults = t), (this._cache = {})
          }
          return (
            (e.createFromRawTheme = function (e, t) {
              return this.createFromParsedTheme(a(e), t)
            }),
            (e.createFromParsedTheme = function (e, t) {
              return o(e, t)
            }),
            (e.prototype.getColorMap = function () {
              return this._colorMap.getColorMap()
            }),
            (e.prototype.getDefaults = function () {
              return this._defaults
            }),
            (e.prototype.match = function (e) {
              return (
                this._cache.hasOwnProperty(e) || (this._cache[e] = this._root.match(e)),
                this._cache[e]
              )
            }),
            e
          )
        })()
        function u(e, t) {
          return e < t ? -1 : e > t ? 1 : 0
        }
        function l(e, t) {
          if (null === e && null === t) return 0
          if (!e) return -1
          if (!t) return 1
          var n = e.length,
            r = t.length
          if (n === r) {
            for (var s = 0; s < n; s++) {
              var a = u(e[s], t[s])
              if (0 !== a) return a
            }
            return 0
          }
          return n - r
        }
        ;(t.Theme = c), (t.strcmp = u), (t.strArrCmp = l)
        var h = (function () {
          function e(e, t, n, r, s) {
            ;(this.scopeDepth = e),
              (this.parentScopes = t),
              (this.fontStyle = n),
              (this.foreground = r),
              (this.background = s)
          }
          return (
            (e.prototype.clone = function () {
              return new e(
                this.scopeDepth,
                this.parentScopes,
                this.fontStyle,
                this.foreground,
                this.background
              )
            }),
            (e.cloneArr = function (e) {
              for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n].clone()
              return t
            }),
            (e.prototype.acceptOverwrite = function (e, t, n, r) {
              this.scopeDepth > e ? console.log('how did this happen?') : (this.scopeDepth = e),
                -1 !== t && (this.fontStyle = t),
                0 !== n && (this.foreground = n),
                0 !== r && (this.background = r)
            }),
            e
          )
        })()
        t.ThemeTrieElementRule = h
        var p = (function () {
          function e(e, t, n) {
            void 0 === t && (t = []),
              void 0 === n && (n = {}),
              (this._mainRule = e),
              (this._rulesWithParentScopes = t),
              (this._children = n)
          }
          return (
            (e._sortBySpecificity = function (e) {
              return 1 === e.length || e.sort(this._cmpBySpecificity), e
            }),
            (e._cmpBySpecificity = function (e, t) {
              if (e.scopeDepth === t.scopeDepth) {
                var n = e.parentScopes,
                  r = t.parentScopes,
                  s = null === n ? 0 : n.length,
                  a = null === r ? 0 : r.length
                if (s === a)
                  for (var o = 0; o < s; o++) {
                    var i = n[o].length,
                      c = r[o].length
                    if (i !== c) return c - i
                  }
                return a - s
              }
              return t.scopeDepth - e.scopeDepth
            }),
            (e.prototype.match = function (t) {
              if ('' === t)
                return e._sortBySpecificity(
                  [].concat(this._mainRule).concat(this._rulesWithParentScopes)
                )
              var n,
                r,
                s = t.indexOf('.')
              return (
                -1 === s
                  ? ((n = t), (r = ''))
                  : ((n = t.substring(0, s)), (r = t.substring(s + 1))),
                this._children.hasOwnProperty(n)
                  ? this._children[n].match(r)
                  : e._sortBySpecificity(
                      [].concat(this._mainRule).concat(this._rulesWithParentScopes)
                    )
              )
            }),
            (e.prototype.insert = function (t, n, r, s, a, o) {
              if ('' !== n) {
                var i,
                  c,
                  u,
                  l = n.indexOf('.')
                ;-1 === l
                  ? ((i = n), (c = ''))
                  : ((i = n.substring(0, l)), (c = n.substring(l + 1))),
                  this._children.hasOwnProperty(i)
                    ? (u = this._children[i])
                    : ((u = new e(this._mainRule.clone(), h.cloneArr(this._rulesWithParentScopes))),
                      (this._children[i] = u)),
                  u.insert(t + 1, c, r, s, a, o)
              } else this._doInsertHere(t, r, s, a, o)
            }),
            (e.prototype._doInsertHere = function (e, t, n, r, s) {
              if (null !== t) {
                for (var a = 0, o = this._rulesWithParentScopes.length; a < o; a++) {
                  var i = this._rulesWithParentScopes[a]
                  if (0 === l(i.parentScopes, t)) return void i.acceptOverwrite(e, n, r, s)
                }
                ;-1 === n && (n = this._mainRule.fontStyle),
                  0 === r && (r = this._mainRule.foreground),
                  0 === s && (s = this._mainRule.background),
                  this._rulesWithParentScopes.push(new h(e, t, n, r, s))
              } else this._mainRule.acceptOverwrite(e, n, r, s)
            }),
            e
          )
        })()
        t.ThemeTrieElement = p
      }
    ])
  })(we)
  const Se = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  class Ae extends we.exports.Registry {
    constructor(e) {
      super(e),
        (this._resolver = e),
        (this.themesPath = 'themes/'),
        (this._resolvedThemes = {}),
        (this._resolvedGrammars = {})
    }
    getTheme(e) {
      return 'string' == typeof e ? this._resolvedThemes[e] : e
    }
    async loadTheme(e) {
      return 'string' == typeof e
        ? (this._resolvedThemes[e] ||
            (this._resolvedThemes[e] = await de(`${this.themesPath}${e}.json`)),
          this._resolvedThemes[e])
        : ((e = ge(e)).name && (this._resolvedThemes[e.name] = e), e)
    }
    async loadThemes(e) {
      return await Promise.all(e.map(e => this.loadTheme(e)))
    }
    getLoadedThemes() {
      return Object.keys(this._resolvedThemes)
    }
    getGrammer(e) {
      return this._resolvedGrammars[e]
    }
    async loadLanguage(e) {
      const t = await this.loadGrammar(e.scopeName)
      ;(this._resolvedGrammars[e.id] = t),
        e.aliases &&
          e.aliases.forEach(e => {
            this._resolvedGrammars[e] = t
          })
    }
    async loadLanguages(e) {
      for (const t of e) this._resolver.addLanguage(t)
      for (const t of e) await this.loadLanguage(t)
    }
    getLoadedLanguages() {
      return Object.keys(this._resolvedGrammars)
    }
  }
  function Ne(e) {
    return 'string' == typeof e
      ? t.find(t => {
          var n
          return t.id === e || (null === (n = t.aliases) || void 0 === n ? void 0 : n.includes(e))
        })
      : e
  }
  ;(e.BUNDLED_LANGUAGES = t),
    (e.BUNDLED_THEMES = [
      'css-variables',
      'dark-plus',
      'dracula-soft',
      'dracula',
      'github-dark-dimmed',
      'github-dark',
      'github-light',
      'light-plus',
      'material-darker',
      'material-default',
      'material-lighter',
      'material-ocean',
      'material-palenight',
      'min-dark',
      'min-light',
      'monokai',
      'nord',
      'one-dark-pro',
      'poimandres',
      'slack-dark',
      'slack-ochin',
      'solarized-dark',
      'solarized-light',
      'vitesse-dark',
      'vitesse-light'
    ]),
    (e.getHighlighter = async function (e) {
      var n, s
      const { _languages: a, _themes: o } = (function (e) {
          var n
          let r = t,
            s = e.themes || []
          return (
            (null === (n = e.langs) || void 0 === n ? void 0 : n.length) && (r = e.langs.map(Ne)),
            e.theme && s.unshift(e.theme),
            s.length || (s = ['nord']),
            { _languages: r, _themes: s }
          )
        })(e),
        i = new be(
          (async function () {
            if (!he) {
              let e
              if (ce) e = V(le || pe('dist/onigasm.wasm'))
              else {
                const t = require('path').join(require.resolve('onigasm'), '../onigasm.wasm'),
                  n = require('fs').readFileSync(t).buffer
                e = V(n)
              }
              he = e.then(() => ({
                createOnigScanner: e => new J(e),
                createOnigString: e => new ee(e)
              }))
            }
            return he
          })(),
          'onigasm'
        ),
        c = new Ae(i)
      ;(null === (n = e.paths) || void 0 === n ? void 0 : n.themes) &&
        (c.themesPath = e.paths.themes),
        (null === (s = e.paths) || void 0 === s ? void 0 : s.languages) &&
          (i.languagesPath = e.paths.languages)
      const u = (await c.loadThemes(o))[0]
      let l
      await c.loadLanguages(a)
      const h = {
        '#000001': 'var(--shiki-color-text)',
        '#000002': 'var(--shiki-color-background)',
        '#000004': 'var(--shiki-token-constant)',
        '#000005': 'var(--shiki-token-string)',
        '#000006': 'var(--shiki-token-comment)',
        '#000007': 'var(--shiki-token-keyword)',
        '#000008': 'var(--shiki-token-parameter)',
        '#000009': 'var(--shiki-token-function)',
        '#000010': 'var(--shiki-token-string-expression)',
        '#000011': 'var(--shiki-token-punctuation)',
        '#000012': 'var(--shiki-token-link)'
      }
      function p(e) {
        const t = e ? c.getTheme(e) : u
        if (!t) throw Error(`No theme registration for ${e}`)
        ;(l && l.name === t.name) || (c.setTheme(t), (l = t))
        const n = c.getColorMap()
        return (
          'css-variables' === t.name &&
            (function (e, t) {
              ;(e.bg = h[e.bg] || e.bg),
                (e.fg = h[e.fg] || e.fg),
                t.forEach((e, n) => {
                  t[n] = h[e] || e
                })
            })(t, n),
          { _theme: t, _colorMap: n }
        )
      }
      function f(e, t = 'text', n, s = { includeExplanation: !0 }) {
        if (
          (function (e) {
            return !e || ['plaintext', 'txt', 'text'].includes(e)
          })(t)
        )
          return [[{ content: e }]]
        const { _grammer: a } = (function (e) {
            const t = c.getGrammer(e)
            if (!t) throw Error(`No language registration for ${e}`)
            return { _grammer: t }
          })(t),
          { _theme: o, _colorMap: i } = p(n)
        return (function (e, t, n, s, a) {
          let o = n.split(/\r\n|\r|\n/),
            i = we.exports.INITIAL,
            c = [],
            u = []
          for (let n = 0, l = o.length; n < l; n++) {
            let l,
              h,
              p,
              f = o[n]
            if ('' === f) {
              ;(c = []), u.push([])
              continue
            }
            a.includeExplanation && ((l = s.tokenizeLine(f, i)), (h = l.tokens), (p = 0))
            let d = s.tokenizeLine2(f, i),
              g = d.tokens.length / 2
            for (let n = 0; n < g; n++) {
              let s = d.tokens[2 * n],
                o = n + 1 < g ? d.tokens[2 * n + 2] : f.length
              if (s === o) continue
              let i = d.tokens[2 * n + 1],
                u = t[r.getForeground(i)],
                l = r.getFontStyle(i),
                m = []
              if (a.includeExplanation) {
                let t = 0
                for (; s + t < o; ) {
                  let n = h[p],
                    r = f.substring(n.startIndex, n.endIndex)
                  ;(t += r.length), m.push({ content: r, scopes: ke(e, n.scopes) }), p++
                }
              }
              c.push({ content: f.substring(s, o), color: u, fontStyle: l, explanation: m })
            }
            u.push(c), (c = []), (i = d.ruleStack)
          }
          return u
        })(o, i, e, a, s)
      }
      return {
        codeToThemedTokens: f,
        codeToHtml: function (e, t = 'text', n) {
          const r = f(e, t, n, { includeExplanation: !1 }),
            { _theme: s } = p(n)
          return Ce(r, { fg: s.fg, bg: s.bg })
        },
        getTheme: e => p(e)._theme,
        loadTheme: async function (e) {
          await c.loadTheme(e)
        },
        loadLanguage: async function (e) {
          const t = Ne(e)
          i.addLanguage(t), await c.loadLanguage(t)
        },
        getBackgroundColor: function (e) {
          const { _theme: t } = p(e)
          return t.bg
        },
        getForegroundColor: function (e) {
          const { _theme: t } = p(e)
          return t.fg
        },
        getLoadedThemes: function () {
          return c.getLoadedThemes()
        },
        getLoadedLanguages: function () {
          return c.getLoadedLanguages()
        }
      }
    }),
    (e.loadTheme = de),
    (e.renderToHtml = Ce),
    (e.setCDN = function (e) {
      ue = e
    }),
    (e.setOnigasmWASM = function (e) {
      le = e
    }),
    Object.defineProperty(e, '__esModule', { value: !0 })
})((this.shiki = this.shiki || {}))