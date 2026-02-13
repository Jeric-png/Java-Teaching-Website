# Exercise 2: Packages & Classpath — Solutions

## a) Directory structure inside `source/`

```
source/
└── app/
    ├── Main.java
    └── util/
        └── Formatter.java
```

The package `app` maps to the folder `app/`, and the package `app.util` maps to `app/util/`.

---

## b) Compile command (`compile.sh`)

```bash
javac -cp lib/gson-2.10.1.jar -d out source/app/Main.java source/app/util/Formatter.java
```

**Explanation:**
- `-cp lib/gson-2.10.1.jar` — adds the Gson JAR to the classpath so the compiler can find `com.google.gson.Gson`
- `-d out` — places all compiled `.class` files in the `out/` directory (maintaining package structure automatically)
- We list both `.java` files so they are both compiled

---

## c) How many JAR files needed during compilation?

**1 JAR file** — `gson-2.10.1.jar`

Only `Formatter.java` directly imports `com.google.gson.Gson`, which is inside this JAR. `Main.java` uses `Formatter` which is our own code (not in a JAR).

---

## d) Run command (`run.sh`)

### macOS / Linux:
```bash
java -cp out:lib/gson-2.10.1.jar app.Main
```

### Windows:
```bat
java -cp out;lib\gson-2.10.1.jar app.Main
```

**Explanation:**
- `-cp out:lib/gson-2.10.1.jar` — the classpath includes both `out/` (our compiled classes) and the Gson JAR (needed at runtime)
- `app.Main` — the fully qualified class name (package + class) of the entry point
- On macOS/Linux, classpath entries are separated by `:` (colon)
- On Windows, classpath entries are separated by `;` (semicolon)
