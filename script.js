// ===== Week Content Data =====
// Each week has: coding exercises (2-3 questions) + MCQs
// Fill in your content each week — structure is ready to go!

// ===== Helper: Generate Code Block HTML =====
function codeBlock(filename, code) {
  const escapedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return `
    <div class="code-block">
      <div class="code-block-header">
        <span class="file-label">${filename}</span>
        <button class="copy-btn" onclick="copyCode(this)">Copy</button>
      </div>
      <pre><code class="language-java">${escapedCode}</code></pre>
    </div>
  `;
}

// --- Pre-built code blocks for Exercise 1 ---
const w5e1_base = codeBlock('BankAccount.java',
  'public abstract class BankAccount {\n' +
  '    private String accountHolder;\n' +
  '    private double balance;\n' +
  '\n' +
  '    protected BankAccount(String accountHolder, double balance) {\n' +
  '        this.accountHolder = accountHolder;\n' +
  '        this.balance = balance;\n' +
  '    }\n' +
  '\n' +
  '    public void deposit(double amount) {\n' +
  '        balance += amount;\n' +
  '    }\n' +
  '\n' +
  '    public abstract boolean withdraw(double amount);\n' +
  '\n' +
  '    public double getBalance() {\n' +
  '        return balance;\n' +
  '    }\n' +
  '\n' +
  '    public void setBalance(double balance) {\n' +
  '        this.balance = balance;\n' +
  '    }\n' +
  '\n' +
  '    public String getAccountHolder() {\n' +
  '        return accountHolder;\n' +
  '    }\n' +
  '}');

const w5e1_test = codeBlock('BankTest.java',
  'public class BankTest {\n' +
  '    public static void main(String[] args) {\n' +
  '        SavingsAccount sa = new SavingsAccount("Alice", 500.0, 100.0);\n' +
  '        System.out.println("=== Savings Account ===");\n' +
  '        System.out.println("Holder: " + sa.getAccountHolder());\n' +
  '        System.out.println("Balance: $" + sa.getBalance());\n' +
  '\n' +
  '        sa.deposit(200.0);\n' +
  '        System.out.println("After deposit $200: $" + sa.getBalance());\n' +
  '\n' +
  '        System.out.println("Withdraw $550: " + sa.withdraw(550.0));\n' +
  '        System.out.println("Balance: $" + sa.getBalance());\n' +
  '\n' +
  '        System.out.println("Withdraw $600: " + sa.withdraw(600.0));\n' +
  '        System.out.println("Balance: $" + sa.getBalance());\n' +
  '\n' +
  '        sa.addInterest(0.05);\n' +
  '        System.out.println("After 5% interest: $" + sa.getBalance());\n' +
  '\n' +
  '        System.out.println();\n' +
  '\n' +
  '        CheckingAccount ca = new CheckingAccount("Bob", 300.0, 200.0);\n' +
  '        System.out.println("=== Checking Account ===");\n' +
  '        System.out.println("Holder: " + ca.getAccountHolder());\n' +
  '        System.out.println("Balance: $" + ca.getBalance());\n' +
  '\n' +
  '        System.out.println("Withdraw $400: " + ca.withdraw(400.0));\n' +
  '        System.out.println("Balance: $" + ca.getBalance());\n' +
  '\n' +
  '        System.out.println("Withdraw $150: " + ca.withdraw(150.0));\n' +
  '        System.out.println("Balance: $" + ca.getBalance());\n' +
  '    }\n' +
  '}');

const w5e1_output = codeBlock('Expected Output',
  '=== Savings Account ===\n' +
  'Holder: Alice\n' +
  'Balance: $500.0\n' +
  'After deposit $200: $700.0\n' +
  'Withdraw $550: true\n' +
  'Balance: $150.0\n' +
  'Withdraw $600: false\n' +
  'Balance: $150.0\n' +
  'After 5% interest: $157.5\n' +
  '\n' +
  '=== Checking Account ===\n' +
  'Holder: Bob\n' +
  'Balance: $300.0\n' +
  'Withdraw $400: true\n' +
  'Balance: $-100.0\n' +
  'Withdraw $150: false\n' +
  'Balance: $-100.0');

// --- Pre-built code blocks for Exercise 2 ---
const w5e2_main = codeBlock('Main.java',
  'package app;\n' +
  '\n' +
  'import app.util.Formatter;\n' +
  '\n' +
  'public class Main {\n' +
  '    public static void main(String[] args) {\n' +
  '        Formatter fmt = new Formatter();\n' +
  '        System.out.println(fmt.formatAsJson("Alice", 85));\n' +
  '        System.out.println(fmt.formatAsJson("Bob", 92));\n' +
  '    }\n' +
  '}');

const w5e2_formatter = codeBlock('Formatter.java',
  'package app.util;\n' +
  '\n' +
  'import com.google.gson.Gson;\n' +
  'import java.util.LinkedHashMap;\n' +
  'import java.util.Map;\n' +
  '\n' +
  'public class Formatter {\n' +
  '    public String formatAsJson(String name, int score) {\n' +
  '        Map<String, Object> data = new LinkedHashMap<>();\n' +
  '        data.put("name", name);\n' +
  '        data.put("score", score);\n' +
  '        return new Gson().toJson(data);\n' +
  '    }\n' +
  '}');

const w5e2_output = codeBlock('Expected Output',
  '{"name":"Alice","score":85}\n' +
  '{"name":"Bob","score":92}');

const weeks = [
  {
    id: 'week5',
    week: 'Week 5',
    title: 'Inheritance & Classpath',
    description: 'Learn about abstract classes, inheritance, and how Java organizes code.',
    exercises: [
      {
        id: 'w5e1',
        title: 'Exercise 1: Abstract Classes & Inheritance',
        description: 'Implement BankAccount subclasses based on a class diagram.',
        instructions: `
          <p><strong>[Abstract Class]</strong> Write the following <strong>3 classes</strong> based on the class diagram below:</p>

          <h4>📐 Class Diagram</h4>
          <table class="class-diagram">
            <tr>
              <td colspan="2" style="text-align:center; padding-bottom:16px;">
                <strong><em>BankAccount</em></strong> (Abstract)<br>
                <code>- accountHolder : String</code><br>
                <code>- balance : double</code><br>
                <code># BankAccount(accountHolder : String, balance : double)</code><br>
                <code>+ deposit(amount : double) : void</code><br>
                <code>+ withdraw(amount : double) : boolean</code> <em>[abstract]</em><br>
                <code>+ getBalance() : double</code><br>
                <code>+ setBalance(balance : double) : void</code><br>
                <code>+ getAccountHolder() : String</code>
              </td>
            </tr>
            <tr>
              <td style="padding-right:24px;">
                <strong>SavingsAccount</strong> extends BankAccount<br>
                <code>- minBalance : double</code><br>
                <code>+ SavingsAccount(holder, balance, minBalance)</code><br>
                <code>+ withdraw(amount : double) : boolean</code><br>
                <code>+ addInterest(rate : double) : void</code>
              </td>
              <td>
                <strong>CheckingAccount</strong> extends BankAccount<br>
                <code>- overdraftLimit : double</code><br>
                <code>+ CheckingAccount(holder, balance, overdraftLimit)</code><br>
                <code>+ withdraw(amount : double) : boolean</code>
              </td>
            </tr>
          </table>

          <h4>📋 Requirements</h4>
          <ul>
            <li><code>deposit(amount)</code> adds the amount to the balance (already implemented in BankAccount)</li>
            <li><code>withdraw(amount)</code> returns <code>true</code> if successful, <code>false</code> otherwise</li>
            <li><strong>SavingsAccount</strong>: withdrawal only allowed if remaining balance would be <strong>≥ minBalance</strong>. <code>addInterest(rate)</code> increases balance by <code>balance × rate</code>.</li>
            <li><strong>CheckingAccount</strong>: withdrawal allowed even into negative, but balance <strong>cannot go below <code>-overdraftLimit</code></strong>.</li>
          </ul>

          <div class="info-box tip">
            <span class="info-icon">💡</span>
            <span>Use <code>setBalance()</code> from the parent class to update the balance inside your <code>withdraw()</code> methods, since <code>balance</code> is <code>private</code> in BankAccount.</span>
          </div>

          <h4>📦 Provided Files</h4>
          <p>You are given <strong>BankAccount.java</strong> and <strong>BankTest.java</strong>. Implement <strong>SavingsAccount.java</strong> and <strong>CheckingAccount.java</strong>.</p>

          ${w5e1_base}
          ${w5e1_test}

          <h4>✅ Expected Output</h4>
          ${w5e1_output}
        `,
      },
      {
        id: 'w5e2',
        title: 'Exercise 2: Packages & Classpath',
        description: 'Set up a Java project with packages and external JAR dependencies.',
        instructions: `
          <p><strong>[Classpath]</strong> You are given the following two Java classes. Study their <code>package</code> and <code>import</code> statements carefully, then answer the questions below.</p>

          <h4>📄 Given Code</h4>
          ${w5e2_main}
          ${w5e2_formatter}

          <h4>📦 External Dependency</h4>
          <table class="class-diagram">
            <tr>
              <td style="text-align:center;">
                <strong>gson-2.10.1.jar</strong><br>
                <em>Contains the package:</em><br>
                <code>com.google.gson</code>
              </td>
            </tr>
          </table>

          <h4>📂 Project Skeleton</h4>
          <p>You are given the following project folder structure:</p>
          <pre><code>q2/
├── lib/
│   └── gson-2.10.1.jar
├── source/
│   └── (place your Java files here)
├── out/
├── compile.sh
└── run.sh</code></pre>

          <h4>📋 Questions</h4>
          <ol type="a">
            <li>Place the Java classes in the correct sub-directories inside the <code>source</code> folder. Draw out the directory tree.</li>
            <li>Write a <strong>one-liner command</strong> in <code>compile.sh</code> to compile <code>Main</code> so that all Java files are compiled and all <code>.class</code> files are placed in the <code>out</code> folder.</li>
            <li>How many of the JAR files do you need during <strong>compilation</strong>?</li>
            <li>Write a <strong>one-liner command</strong> in <code>run.sh</code> to run the application.</li>
          </ol>

          <div class="info-box tip">
            <span class="info-icon">💡</span>
            <span>Remember: Java package names map directly to folder paths. For example, a class in package <code>foo.bar</code> must be in the directory <code>foo/bar/</code>.</span>
          </div>

          <h4>✅ Expected Output</h4>
          <p>When run correctly, the program should print:</p>
          ${w5e2_output}
        `,
      },
      {
        id: 'w5e3',
        title: 'Exercise 3',
        description: '',
        instructions: '',
      },
    ],
    mcq: [
      {
        id: 'w5q1',
        question: 'Interface Implementation & Access Modifiers — Will this compile?',
        code: '// File: src/game/Playable.java\npackage game;\npublic interface Playable {\n    void play(); \n    int MAX_PLAYERS = 4;\n}\n\n// File: src/game/BoardGame.java\npackage game;\npublic class BoardGame implements Playable {\n    void play() { \n        System.out.println("Rolling dice...");\n    }\n    \n    public void setPlayers() {\n        MAX_PLAYERS = 6; \n    }\n}',
        options: [
          'Compiles successfully.',
          'Fails to compile.'
        ],
        correct: 1,
        explanation: 'There are <strong>two errors</strong>:<br><br><strong>1. Visibility Reduction:</strong> In an interface, methods are implicitly <code>public</code> and <code>abstract</code>. In <code>BoardGame</code>, the <code>play()</code> method has default (package-private) access. When implementing an interface, you cannot assign a weaker access privilege — it must be declared <code>public void play()</code>.<br><br><strong>2. Final Variables:</strong> Variables in an interface are implicitly <code>public static final</code>. You cannot reassign <code>MAX_PLAYERS = 6</code> inside <code>BoardGame</code>.',
      },
      {
        id: 'w5q2',
        question: 'Abstract Classes & Interface Compliance — Will this compile?',
        code: 'interface Eater {\n    void eat();\n}\n\nabstract class Animal implements Eater {\n    // No implementation of eat() here\n}\n\nclass Dog extends Animal {\n    // No implementation of eat() here either\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n    }\n}',
        options: [
          'Compiles and runs successfully.',
          'Compilation Error.'
        ],
        correct: 1,
        explanation: 'While the abstract class <code>Animal</code> is <strong>not required</strong> to implement the <code>eat()</code> method from the <code>Eater</code> interface (because abstract classes can have unimplemented abstract methods), the <strong>concrete subclass <code>Dog</code> must implement all inherited abstract methods</strong>. Since <code>Dog</code> does not implement <code>eat()</code>, the code fails to compile.',
      },
      {
        id: 'w5q3',
        question: 'The "Protected" Access Modifier Trap — Which lines cause a compilation error?',
        code: '// File: src/parent/Parent.java\npackage parent;\npublic class Parent {\n    protected void secret() { System.out.println("Shh"); }\n}\n\n// File: src/child/Child.java\npackage child;\nimport parent.Parent;\n\npublic class Child extends Parent {\n    public void test() {\n        secret();           // Line 1\n        Parent p = new Parent();\n        p.secret();         // Line 2\n        Child c = new Child();\n        c.secret();         // Line 3\n    }\n}',
        options: [
          'Line 1 only.',
          'Line 2 only.',
          'Lines 2 and 3.'
        ],
        correct: 1,
        explanation: '<code>protected</code> members are accessible to subclasses in different packages, but <strong>only through inheritance</strong> (via <code>this</code> or an instance of the subclass itself).<br><br><strong>Line 1</strong> (<code>secret()</code>): ✅ Valid — inherited by <code>Child</code>.<br><strong>Line 2</strong> (<code>p.secret()</code>): ❌ Invalid — in the <code>child</code> package, you cannot access a <code>protected</code> member of <code>parent.Parent</code> using a <code>Parent</code> reference.<br><strong>Line 3</strong> (<code>c.secret()</code>): ✅ Valid — <code>c</code> is of type <code>Child</code>, so it inherits the <code>protected</code> member.',
      },
      {
        id: 'w5q4',
        question: 'Classpath & Execution — You are currently at <code>D:\\project\\</code>. Which command successfully runs the program?',
        code: 'Directory Structure:\n\nD:\\project\\\n  +- classes\\\n      +- com\\\n          +- app\\\n              +- Main.class (package com.app)',
        options: [
          'java -cp classes com/app/Main',
          'java -cp classes/com/app Main',
          'java -cp classes com.app.Main',
          'java classes.com.app.Main'
        ],
        correct: 2,
        explanation: 'To run a Java program, you must specify the <strong>classpath</strong> pointing to the root of the package hierarchy (the folder containing <code>com</code>), and provide the <strong>Fully Qualified Class Name</strong> (<code>com.app.Main</code>).<br><br><strong>Option A:</strong> Uses slashes (file path style) instead of dots (package style) for the class name.<br><strong>Option B:</strong> Points the classpath too deep (into the package itself), so Java cannot find the root <code>com</code>.<br><strong>Option D:</strong> Misses the <code>-cp</code> flag entirely.',
      },
      {
        id: 'w5q5',
        question: 'Variable Hiding (Shadowing) vs Overriding — What is the output?',
        code: 'class A {\n    int val = 10;\n    int getVal() { return val; }\n}\n\nclass B extends A {\n    int val = 20;\n    int getVal() { return val; }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        System.out.println(obj.val + " " + obj.getVal());\n    }\n}',
        options: [
          '10 10',
          '20 20',
          '10 20',
          '20 10'
        ],
        correct: 2,
        explanation: '<strong>Variables (<code>obj.val</code>):</strong> Variable access in Java is determined by the <strong>reference type</strong> (compile-time type), not the object type. Since <code>obj</code> is type <code>A</code>, <code>obj.val</code> accesses <code>A</code>\'s <code>val</code> → <strong>10</strong>. Variables are <em>not</em> polymorphic.<br><br><strong>Methods (<code>obj.getVal()</code>):</strong> Methods <em>are</em> polymorphic (late binding). The runtime object is of type <code>B</code>, so <code>B</code>\'s overridden <code>getVal()</code> is called. <code>B.getVal()</code> returns <code>B</code>\'s local <code>val</code> → <strong>20</strong>.',
      },
      {
        id: 'w5q6',
        question: 'Compilation Dependencies — What happens when you run this command from the root directory?<br><code>javac -d classes -cp classes src/app/Main.java</code>',
        code: 'Directory Structure:\n\nsrc/\n  util/Helper.java  (package util)\n  app/Main.java     (package app; imports util.Helper)\nclasses/ (empty)',
        options: [
          'Compiles successfully.',
          'Compilation Error (cannot find symbol Helper).'
        ],
        correct: 1,
        explanation: 'You are compiling <code>Main.java</code>, which depends on <code>Helper.java</code>. However:<br><br><strong>1.</strong> You did not compile <code>Helper.java</code> first, so <code>Helper.class</code> does not exist in <code>classes/</code> yet.<br><strong>2.</strong> You did not include the source path for <code>Helper.java</code> in the command. The compiler looks in <code>-cp classes</code> (which is empty) and fails to find <code>Helper</code>.<br><br><strong>Fix:</strong> Compile <code>Helper.java</code> first, or list both files:<br><code>javac -d classes src/app/Main.java src/util/Helper.java</code>',
      },
      {
        id: 'w5q7',
        question: 'Constructor Chaining — Will this compile?',
        code: 'class Parent {\n    public Parent(String s) {\n        System.out.println("Parent: " + s);\n    }\n}\n\nclass Child extends Parent {\n    public Child() {\n        System.out.println("Child created");\n    }\n}',
        options: [
          'Compiles and prints "Child created".',
          'Compilation Error.'
        ],
        correct: 1,
        explanation: 'If the parent class does not have a <strong>no-argument constructor</strong> (it has <code>Parent(String s)</code>), the child class must explicitly call <code>super(someString)</code> in its constructor.<br><br>Java attempts to insert an implicit <code>super()</code> (no-args) call in <code>Child</code>, but <code>Parent()</code> does not exist — resulting in a compilation error.',
      },
      {
        id: 'w5q8',
        question: 'Interface Fields and Ambiguity — What happens when you compile this?',
        code: 'interface A { int VAL = 5; }\ninterface B { int VAL = 10; }\n\nclass C implements A, B {\n    public void print() {\n        System.out.println(VAL);\n    }\n}',
        options: [
          'Prints 5.',
          'Prints 10.',
          'Compilation Error (ambiguous reference).'
        ],
        correct: 2,
        explanation: 'Both interfaces <code>A</code> and <code>B</code> define a field <code>VAL</code> (implicitly <code>public static final</code>). Because class <code>C</code> implements both, the reference to <code>VAL</code> inside <code>print()</code> is <strong>ambiguous</strong>. The compiler doesn\'t know whether to use <code>A.VAL</code> or <code>B.VAL</code>.<br><br><strong>Fix:</strong> You must explicitly specify <code>A.VAL</code> or <code>B.VAL</code>.',
      },
      {
        id: 'w5q9',
        question: 'Default Access vs Package Private — Will this compile?',
        code: '// File: src/pkg1/A.java\npackage pkg1;\npublic class A {\n    void msg() { System.out.println("Hello"); } // Default access\n}\n\n// File: src/pkg2/B.java\npackage pkg2;\nimport pkg1.A;\n\npublic class B extends A {\n    public void test() {\n        msg(); \n    }\n}',
        options: [
          'Compiles and prints "Hello".',
          'Compilation Error.'
        ],
        correct: 1,
        explanation: 'The method <code>msg()</code> in class <code>A</code> has <strong>default (package-private)</strong> access because no modifier is specified. Default access is only visible to classes <strong>within the same package</strong> (<code>pkg1</code>).<br><br>Even though <code>B extends A</code>, <code>B</code> is in a different package (<code>pkg2</code>), so it <strong>cannot</strong> see or access <code>msg()</code>.',
      },
      {
        id: 'w5q10',
        question: 'Overriding and Covariant Return Types — Will this compile?',
        code: 'class Shape {\n    protected Object getDetails() { return "Shape"; }\n}\n\nclass Circle extends Shape {\n    @Override\n    public String getDetails() { return "Circle"; }\n}',
        options: [
          'Compiles successfully.',
          'Compilation Error.'
        ],
        correct: 0,
        explanation: 'This is <strong>valid</strong> method overriding:<br><br><strong>Access Modifier:</strong> The subclass method (<code>public</code>) is <em>less restrictive</em> than the parent method (<code>protected</code>), which is allowed.<br><br><strong>Return Type:</strong> The return type <code>String</code> is a subclass of <code>Object</code>. Java supports <strong>covariant return types</strong>, meaning an overriding method can return a subtype of the type declared in the overridden method (since Java 5).',
      },
    ]
  },
  {
    id: 'week6',
    week: 'Week 6',
    title: 'Object-Oriented Programming',
    description: 'Practice creating classes, objects, and using OOP principles.',
    exercises: [
      {
        id: 'w6e1',
        title: 'Exercise 1',
        description: 'Write your solution below.',
        instructions: '',
        starterCode: '// Write your code here\n',
      },
      {
        id: 'w6e2',
        title: 'Exercise 2',
        description: 'Write your solution below.',
        instructions: '',
        starterCode: '// Write your code here\n',
      },
    ],
    mcq: [
      {
        id: 'w6q1',
        question: '',
        options: ['A)', 'B)', 'C)', 'D)'],
        correct: 0,
        explanation: '',
      },
      {
        id: 'w6q2',
        question: '',
        options: ['A)', 'B)', 'C)', 'D)'],
        correct: 0,
        explanation: '',
      },
      {
        id: 'w6q3',
        question: '',
        options: ['A)', 'B)', 'C)', 'D)'],
        correct: 0,
        explanation: '',
      },
    ]
  }
];

// ===== State =====
const userAnswers = {}; // stores MCQ selections
const userCode = {};    // stores code editor content

// ===== Copy to Clipboard =====
function copyCode(btn) {
  const codeEl = btn.closest('.code-block').querySelector('code');
  const text = codeEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ===== DOM Elements =====
const contentArea = document.getElementById('content-area');
const navList = document.getElementById('nav-list');
const breadcrumbCurrent = document.getElementById('breadcrumb-current');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

// ===== Render Navigation =====
function renderNav() {
  let html = `
    <div class="nav-item active" data-page="home" onclick="navigate('home')">
      <span class="nav-icon">🏠</span>
      <span>Home</span>
    </div>
    <div class="nav-section-label">Weekly Exercises</div>
  `;

  weeks.forEach((week) => {
    const exerciseCount = week.exercises.length;
    const mcqCount = week.mcq.length;
    html += `
      <div class="nav-item" data-page="${week.id}" onclick="navigate('${week.id}')">
        <span class="nav-icon">📘</span>
        <span>${week.week}</span>
        <span class="nav-badge">${exerciseCount + mcqCount}</span>
      </div>
    `;
  });

  navList.innerHTML = html;
}

// ===== Render Home Page =====
function renderHome() {
  let cardsHtml = weeks.map(w => {
    const total = w.exercises.length + w.mcq.length;
    return `
      <div class="week-card" onclick="navigate('${w.id}')">
        <div class="card-week">${w.week}</div>
        <div class="card-title">${w.title}</div>
        <div class="card-desc">${w.description}</div>
        <div class="card-meta">
          <span>💻 ${w.exercises.length} Coding</span>
          <span>📝 ${w.mcq.length} MCQ</span>
        </div>
      </div>
    `;
  }).join('');

  contentArea.innerHTML = `
    <div class="home-hero">
      <h2>Learn <span class="gradient-text">Java</span> Step by Step</h2>
      <p>Practice Java programming with hands-on coding exercises and quizzes each week.</p>
    </div>
    <div class="week-cards">
      ${cardsHtml}
    </div>
  `;

  breadcrumbCurrent.textContent = 'Home';
}

// ===== Render Week Page =====
function renderWeek(weekId) {
  const week = weeks.find(w => w.id === weekId);
  if (!week) return;

  const weekIndex = weeks.indexOf(week);
  const prevWeek = weeks[weekIndex - 1];
  const nextWeek = weeks[weekIndex + 1];

  // --- Exercises Section ---
  let exercisesHtml = week.exercises.map((ex, i) => {
    const hasInstructions = ex.instructions && ex.instructions.trim() !== '';

    return `
      <div class="exercise-card">
        <div class="exercise-header">
          <span class="exercise-number">${i + 1}</span>
          <div>
            <h3>${ex.title}</h3>
            <p class="exercise-desc">${ex.description}</p>
          </div>
        </div>
        ${hasInstructions ? `
          <div class="exercise-instructions">
            ${ex.instructions}
          </div>
        ` : `
          <div class="info-box note">
            <span class="info-icon">📝</span>
            <span>Instructions coming soon — check back later!</span>
          </div>
        `}
      </div>
    `;
  }).join('');

  // --- MCQ Section ---
  const quizSubmitted = window.quizSubmitted && window.quizSubmitted[weekId];

  let mcqHtml = week.mcq.map((q, i) => {
    const hasQuestion = q.question && q.question.trim() !== '';
    const selectedAnswer = userAnswers[q.id];

    if (!hasQuestion) {
      return `
        <div class="mcq-card">
          <div class="mcq-header">
            <span class="mcq-number">${i + 1}</span>
            <p class="mcq-question">Question coming soon!</p>
          </div>
        </div>
      `;
    }

    // Code snippet block (if question has code)
    const codeHtml = q.code ? `
      <div class="mcq-code-block">
        <pre><code class="language-java">${q.code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</code></pre>
      </div>
    ` : '';

    let optionsHtml = q.options.map((opt, oi) => {
      let stateClass = '';
      if (quizSubmitted) {
        if (oi === q.correct) stateClass = 'correct';
        else if (oi === selectedAnswer && oi !== q.correct) stateClass = 'incorrect';
      }
      const selected = selectedAnswer === oi ? 'selected' : '';
      const disabled = quizSubmitted ? 'disabled' : '';

      return `
        <div class="mcq-option ${stateClass} ${selected} ${disabled}" 
          onclick="selectQuizOption('${q.id}', ${oi}, '${weekId}')">
          <span class="option-letter">${String.fromCharCode(65 + oi)}</span>
          <span class="option-text">${opt}</span>
          ${stateClass === 'correct' ? '<span class="option-icon">✓</span>' : ''}
          ${stateClass === 'incorrect' ? '<span class="option-icon">✗</span>' : ''}
        </div>
      `;
    }).join('');

    const showExplanation = quizSubmitted && q.explanation;

    return `
      <div class="mcq-card ${quizSubmitted ? (selectedAnswer === q.correct ? 'result-correct' : (selectedAnswer !== undefined ? 'result-incorrect' : 'result-unanswered')) : ''}">
        <div class="mcq-header">
          <span class="mcq-number">${i + 1}</span>
          <p class="mcq-question">${q.question}</p>
        </div>
        ${codeHtml}
        <div class="mcq-options">${optionsHtml}</div>
        ${showExplanation ? `
          <div class="mcq-explanation ${selectedAnswer === q.correct ? 'correct' : 'incorrect'}">
            <span class="explanation-icon">${selectedAnswer === q.correct ? '✅' : '💡'}</span>
            <span>${q.explanation}</span>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  // Score summary (shown after submit)
  let scoreSummaryHtml = '';
  if (quizSubmitted) {
    const total = week.mcq.filter(q => q.question && q.question.trim() !== '').length;
    const correctCount = week.mcq.filter(q => q.question && q.question.trim() !== '' && userAnswers[q.id] === q.correct).length;
    const pct = Math.round((correctCount / total) * 100);
    let emoji = pct === 100 ? '🎉' : pct >= 70 ? '👍' : pct >= 50 ? '🤔' : '📚';
    scoreSummaryHtml = `
      <div class="quiz-score-banner">
        <span class="score-emoji">${emoji}</span>
        <div class="score-details">
          <span class="score-text">You scored <strong>${correctCount} / ${total}</strong> (${pct}%)</span>
          <span class="score-sub">${pct === 100 ? 'Perfect score!' : pct >= 70 ? 'Great job!' : pct >= 50 ? 'Keep practicing!' : 'Review the explanations below.'}</span>
        </div>
        <button class="reset-quiz-btn" onclick="resetQuiz('${weekId}')">↺ Retry Quiz</button>
      </div>
    `;
  }

  // Submit button
  const submitBtnHtml = !quizSubmitted ? `
    <div class="quiz-submit-wrapper">
      <button class="quiz-submit-btn" onclick="submitQuiz('${weekId}')">Submit Quiz</button>
    </div>
  ` : '';

  // --- Navigation ---
  let navHtml = `
    <div class="lesson-nav">
      <button class="nav-btn ${!prevWeek ? 'disabled' : ''}" 
        ${prevWeek ? `onclick="navigate('${prevWeek.id}')"` : ''}>
        <span class="arrow">←</span>
        <span>${prevWeek ? prevWeek.week : 'Previous'}</span>
      </button>
      <button class="nav-btn ${!nextWeek ? 'disabled' : ''}"
        ${nextWeek ? `onclick="navigate('${nextWeek.id}')"` : ''}>
        <span>${nextWeek ? nextWeek.week : 'Next'}</span>
        <span class="arrow">→</span>
      </button>
    </div>
  `;

  contentArea.innerHTML = `
    <div class="lesson-header">
      <span class="lesson-week-badge">${week.week}</span>
      <h2>${week.title}</h2>
      <p>${week.description}</p>
    </div>

    <div class="section-divider">
      <span class="section-label">💻 Coding Exercises</span>
    </div>
    ${exercisesHtml}

    <div class="section-divider">
      <span class="section-label">📝 Multiple Choice Quiz</span>
    </div>
    ${scoreSummaryHtml}
    ${mcqHtml}
    ${submitBtnHtml}

    ${navHtml}
  `;

  breadcrumbCurrent.textContent = week.week + ': ' + week.title;

  // Re-run Prism highlighting
  if (window.Prism) {
    Prism.highlightAll();
  }
}

// ===== Quiz State =====
window.quizSubmitted = {};

// ===== MCQ Option Selection (radio-style, no reveal) =====
function selectQuizOption(questionId, optionIndex, weekId) {
  if (window.quizSubmitted[weekId]) return; // quiz already submitted
  userAnswers[questionId] = optionIndex;

  // Update selection in-place (no re-render)
  const card = document.querySelector(`[onclick*="'${questionId}'"]`)?.closest('.mcq-card');
  if (card) {
    card.querySelectorAll('.mcq-option').forEach((opt, i) => {
      opt.classList.toggle('selected', i === optionIndex);
    });
  }
}

// ===== Submit Quiz (reveal all answers) =====
function submitQuiz(weekId) {
  const week = weeks.find(w => w.id === weekId);
  if (!week) return;

  // Check if at least one question is answered
  const answeredCount = week.mcq.filter(q => q.question && q.question.trim() !== '' && userAnswers[q.id] !== undefined).length;
  if (answeredCount === 0) {
    alert('Please answer at least one question before submitting!');
    return;
  }

  window.quizSubmitted[weekId] = true;
  renderWeek(weekId);

  // Scroll to score banner
  setTimeout(() => {
    const banner = document.querySelector('.quiz-score-banner');
    if (banner) banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

// ===== Reset Quiz =====
function resetQuiz(weekId) {
  const week = weeks.find(w => w.id === weekId);
  if (!week) return;

  // Clear answers for this week's questions
  week.mcq.forEach(q => {
    delete userAnswers[q.id];
  });
  delete window.quizSubmitted[weekId];

  renderWeek(weekId);

  // Scroll to quiz section
  setTimeout(() => {
    const divider = document.querySelectorAll('.section-divider')[1];
    if (divider) divider.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ===== Code Editor =====
function saveCode(exerciseId) {
  const editor = document.getElementById('editor-' + exerciseId);
  if (editor) {
    userCode[exerciseId] = editor.value;
  }
}

function resetCode(exerciseId, exerciseIndex) {
  for (const week of weeks) {
    const ex = week.exercises.find(e => e.id === exerciseId);
    if (ex) {
      userCode[exerciseId] = ex.starterCode;
      const editor = document.getElementById('editor-' + exerciseId);
      if (editor) editor.value = ex.starterCode;
      break;
    }
  }
}

function copyEditorCode(exerciseId) {
  const editor = document.getElementById('editor-' + exerciseId);
  if (editor) {
    navigator.clipboard.writeText(editor.value).then(() => {
      const btn = editor.closest('.code-editor-wrapper').querySelector('.copy-btn');
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  }
}

// ===== Navigation =====
function navigate(page) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  if (page === 'home') {
    renderHome();
  } else {
    renderWeek(page);
  }

  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Mobile Menu =====
function toggleSidebar() {
  sidebar.classList.toggle('open');
  sidebarOverlay.classList.toggle('visible');
}

sidebarOverlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('visible');
});

// ===== Tab Key Support in Code Editors =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && e.target.classList.contains('code-editor')) {
    e.preventDefault();
    const editor = e.target;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
    editor.selectionStart = editor.selectionEnd = start + 4;
    saveCode(editor.id.replace('editor-', ''));
  }
});

// ===== Initialize =====
renderNav();
renderHome();
