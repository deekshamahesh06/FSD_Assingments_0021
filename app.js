/* =========================================================
   WEBSPHERE
   Web Fundamentals Browser
   HTML + CSS + JavaScript
========================================================= */


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let historyStack = ["home"];
let historyIndex = 0;

let counterValue = 0;


/* =========================================================
   PAGE DATA
========================================================= */

const pages = {

    home: {
        title: "WebSphere",
        url: "websphere.local/home"
    },

    html: {
        title: "HTML Explorer",
        url: "websphere.local/html"
    },

    css: {
        title: "CSS Playground",
        url: "websphere.local/css"
    },

    javascript: {
        title: "JavaScript Lab",
        url: "websphere.local/javascript"
    },

    concepts: {
        title: "Web Concepts",
        url: "websphere.local/concepts"
    },

    testing: {
        title: "Testing & Deployment",
        url: "websphere.local/testing"
    },

    careers: {
        title: "Web Development Careers",
        url: "websphere.local/careers"
    }

};


/* =========================================================
   PAGE CONTENT
========================================================= */

const pageTemplates = {


    /* =========================
       HOME
    ========================= */

    home: () => `

        <section class="home">

            <div class="hero">

                <h1>🌐 WebSphere</h1>

                <p>
                    An interactive browser for Web Fundamentals
                </p>

                <div class="hero-search">

                    <input
                        id="heroSearch"
                        type="text"
                        placeholder="Search Web Fundamentals..."
                    >

                    <button onclick="performHeroSearch()">
                        Search
                    </button>

                </div>

            </div>


            <h2 class="section-title">
                Explore Web Fundamentals
            </h2>


            <div class="cards">

                <div class="card" onclick="navigate('html')">

                    <div class="card-icon">🧱</div>

                    <h3>HTML Explorer</h3>

                    <p>
                        Explore HTML elements, attributes,
                        structure and semantic markup.
                    </p>

                </div>


                <div class="card" onclick="navigate('css')">

                    <div class="card-icon">🎨</div>

                    <h3>CSS Playground</h3>

                    <p>
                        Learn CSS styling and interact
                        with the CSS box model.
                    </p>

                </div>


                <div class="card" onclick="navigate('javascript')">

                    <div class="card-icon">⚡</div>

                    <h3>JavaScript Lab</h3>

                    <p>
                        Experiment with variables,
                        functions, events and DOM interaction.
                    </p>

                </div>


                <div class="card" onclick="navigate('concepts')">

                    <div class="card-icon">🌐</div>

                    <h3>Web Concepts</h3>

                    <p>
                        Internet, WWW, front-end,
                        back-end and web development.
                    </p>

                </div>


                <div class="card" onclick="navigate('testing')">

                    <div class="card-icon">🧪</div>

                    <h3>Testing & Deployment</h3>

                    <p>
                        Testing, version control,
                        DevOps, cloud and deployment.
                    </p>

                </div>


                <div class="card" onclick="navigate('careers')">

                    <div class="card-icon">👨‍💻</div>

                    <h3>Web Careers</h3>

                    <p>
                        Explore web development roles,
                        skills and career paths.
                    </p>

                </div>

            </div>


            <h2 class="section-title">
                IBM Web Fundamentals
            </h2>


            <div class="info-box">

                <p>
                    This project demonstrates concepts learned
                    from Web Development Fundamentals including
                    HTML, CSS, JavaScript, responsive design,
                    testing, deployment and web development careers.
                </p>

            </div>

        </section>

    `,


    /* =========================
       HTML
    ========================= */

    html: () => `

        <section class="content-page">

            <div class="page-heading">

                <h1>🧱 HTML Explorer</h1>

                <p>
                    Explore common HTML elements and their purpose.
                </p>

            </div>


            <div class="info-box">

                <h2>HTML Document Structure</h2>

                <div class="code-box">

                    &lt;!DOCTYPE html&gt;<br>
                    &lt;html&gt;<br>
                    &nbsp;&nbsp;&lt;head&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;My Website&lt;/title&gt;<br>
                    &nbsp;&nbsp;&lt;/head&gt;<br>
                    &nbsp;&nbsp;&lt;body&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World&lt;/h1&gt;<br>
                    &nbsp;&nbsp;&lt;/body&gt;<br>
                    &lt;/html&gt;

                </div>

            </div>


            <div class="info-box">

                <h2>HTML Elements</h2>

                <div class="element-grid">

                    <button
                        class="element-button"
                        onclick="showElement('heading')">
                        &lt;h1&gt;
                    </button>

                    <button
                        class="element-button"
                        onclick="showElement('paragraph')">
                        &lt;p&gt;
                    </button>

                    <button
                        class="element-button"
                        onclick="showElement('link')">
                        &lt;a&gt;
                    </button>

                    <button
                        class="element-button"
                        onclick="showElement('image')">
                        &lt;img&gt;
                    </button>

                    <button
                        class="element-button"
                        onclick="showElement('list')">
                        &lt;ul&gt;
                    </button>

                    <button
                        class="element-button"
                        onclick="showElement('button')">
                        &lt;button&gt;
                    </button>

                    <button
                        class="element-button"
                        onclick="showElement('form')">
                        &lt;form&gt;
                    </button>

                    <button
                        class="element-button"
                        onclick="showElement('table')">
                        &lt;table&gt;
                    </button>

                </div>


                <div
                    id="htmlPreview"
                    class="preview">

                    Click an HTML element above.

                </div>

            </div>


            <div class="info-box">

                <h2>HTML Attributes</h2>

                <ul>

                    <li><strong>id</strong> — uniquely identifies an element</li>

                    <li><strong>class</strong> — groups elements for styling</li>

                    <li><strong>href</strong> — specifies a link destination</li>

                    <li><strong>src</strong> — specifies a resource location</li>

                    <li><strong>alt</strong> — provides alternative image text</li>

                </ul>

            </div>

        </section>

    `,


    /* =========================
       CSS
    ========================= */

    css: () => `

        <section class="content-page">

            <div class="page-heading">

                <h1>🎨 CSS Playground</h1>

                <p>
                    Explore CSS styling and the box model.
                </p>

            </div>


            <div class="info-box">

                <h2>CSS Box Model</h2>

                <p>
                    Every HTML element can be represented
                    using content, padding, border and margin.
                </p>


                <div class="box-model">

                    <div class="box-content">

                        Content

                    </div>

                </div>


                <div class="code-box">

                    content → padding → border → margin

                </div>

            </div>


            <div class="info-box">

                <h2>Change Box Padding</h2>

                <div class="control-group">

                    <label>
                        Padding:
                        <span id="paddingValue">35</span>px
                    </label>

                    <input
                        type="range"
                        min="5"
                        max="80"
                        value="35"
                        id="paddingSlider"
                        oninput="changePadding()"
                    >

                </div>

            </div>


            <div class="info-box">

                <h2>CSS Methods</h2>

                <ul>

                    <li>Inline CSS</li>

                    <li>Internal CSS</li>

                    <li>External CSS</li>

                </ul>

            </div>

        </section>

    `,


    /* =========================
       JAVASCRIPT
    ========================= */

    javascript: () => `

        <section class="content-page">

            <div class="page-heading">

                <h1>⚡ JavaScript Lab</h1>

                <p>
                    Experiment with variables, functions,
                    events and dynamic content.
                </p>

            </div>


            <div class="info-box">

                <h2>Variables & Functions</h2>

                <div class="control-group">

                    <label>
                        Enter your name
                    </label>

                    <input
                        type="text"
                        id="nameInput"
                        placeholder="Your name"
                    >

                </div>

                <button
                    class="primary-button"
                    onclick="greetUser()">

                    Run JavaScript

                </button>


                <div
                    id="jsOutput"
                    class="js-output">

                    Output will appear here...

                </div>

            </div>


            <div class="info-box">

                <h2>JavaScript Events</h2>

                <p>
                    The button below uses a JavaScript
                    click event.
                </p>

                <br>

                <button
                    class="primary-button"
                    onclick="eventDemo()">

                    Click Me

                </button>

                <div
                    id="eventOutput"
                    class="js-output">

                    No event detected.

                </div>

            </div>


            <div class="info-box">

                <h2>DOM Counter</h2>

                <div
                    id="counter"
                    class="counter">

                    0

                </div>


                <div class="counter-buttons">

                    <button onclick="changeCounter(-1)">
                        −
                    </button>

                    <button onclick="changeCounter(1)">
                        +
                    </button>

                </div>

            </div>

        </section>

    `,


    /* =========================
       CONCEPTS
    ========================= */

    concepts: () => `

        <section class="content-page">

            <div class="page-heading">

                <h1>🌐 Web Concepts</h1>

                <p>
                    Concepts from Web Development Fundamentals.
                </p>

            </div>


            <div class="info-box">

                <h2>Internet vs World Wide Web</h2>

                <p>
                    The Internet is the global network
                    connecting computers and devices.
                    The World Wide Web is a service that
                    operates over the Internet.
                </p>

            </div>


            <div class="info-box">

                <h2>Front-End vs Back-End</h2>

                <div class="cards">

                    <div class="card">

                        <div class="card-icon">🎨</div>

                        <h3>Front-End</h3>

                        <p>
                            The part of a website users
                            see and interact with.
                        </p>

                        <br>

                        <strong>
                            HTML • CSS • JavaScript
                        </strong>

                    </div>


                    <div class="card">

                        <div class="card-icon">⚙️</div>

                        <h3>Back-End</h3>

                        <p>
                            Handles server-side logic,
                            databases and APIs.
                        </p>

                        <br>

                        <strong>
                            Node.js • Python • SQL
                        </strong>

                    </div>

                </div>

            </div>


            <div class="info-box">

                <h2>Web Development Process</h2>

                <div class="code-box">

                    Requirements<br>
                    ↓<br>
                    Design / Wireframe<br>
                    ↓<br>
                    Development<br>
                    ↓<br>
                    Testing<br>
                    ↓<br>
                    Deployment<br>
                    ↓<br>
                    Maintenance

                </div>

            </div>


            <div class="info-box">

                <h2>Programming Languages</h2>

                <ul>

                    <li>HTML — Markup language</li>

                    <li>CSS — Styling language</li>

                    <li>JavaScript — Programming language</li>

                    <li>SQL — Database query language</li>

                    <li>Python — General-purpose programming language</li>

                </ul>

            </div>

        </section>

    `,


    /* =========================
       TESTING
    ========================= */

    testing: () => `

        <section class="content-page">

            <div class="page-heading">

                <h1>🧪 Testing & Deployment</h1>

                <p>
                    Explore the web development testing
                    and deployment process.
                </p>

            </div>


            <div class="info-box">

                <h2>Functional Tests</h2>

                <div class="test-item">
                    <span>✓</span>
                    Navigation buttons
                </div>

                <div class="test-item">
                    <span>✓</span>
                    Address bar
                </div>

                <div class="test-item">
                    <span>✓</span>
                    HTML interaction
                </div>

                <div class="test-item">
                    <span>✓</span>
                    CSS interaction
                </div>

                <div class="test-item">
                    <span>✓</span>
                    JavaScript events
                </div>

                <div class="test-item">
                    <span>✓</span>
                    Responsive design
                </div>


                <br>

                <button
                    class="primary-button"
                    onclick="runTests()">

                    RUN FUNCTIONAL TESTS

                </button>


                <div
                    id="testResult"
                    class="test-result">

                    Tests have not been executed.

                </div>

            </div>


            <div class="info-box">

                <h2>Development Lifecycle</h2>

                <div class="code-box">

                    Development
                    →
                    Testing
                    →
                    Version Control
                    →
                    Build
                    →
                    Deployment
                    →
                    Production

                </div>

            </div>


            <div class="info-box">

                <h2>DevOps Concepts</h2>

                <ul>

                    <li>Continuous Integration</li>

                    <li>Continuous Delivery</li>

                    <li>Continuous Deployment</li>

                    <li>Cloud Computing</li>

                    <li>Containers</li>

                    <li>Virtual Machines</li>

                    <li>Version Control</li>

                </ul>

            </div>

        </section>

    `,


    /* =========================
       CAREERS
    ========================= */

    careers: () => `

        <section class="content-page">

            <div class="page-heading">

                <h1>👨‍💻 Web Development Careers</h1>

                <p>
                    Explore roles and skills in web development.
                </p>

            </div>


            <div class="career-grid">

                <div
                    class="career"
                    onclick="careerInfo('Frontend Developer')">

                    <div class="career-icon">🎨</div>

                    <h3>Front-End Developer</h3>

                    <p>
                        Creates user interfaces and
                        interactive websites.
                    </p>

                </div>


                <div
                    class="career"
                    onclick="careerInfo('Backend Developer')">

                    <div class="career-icon">⚙️</div>

                    <h3>Back-End Developer</h3>

                    <p>
                        Develops server-side applications,
                        APIs and databases.
                    </p>

                </div>


                <div
                    class="career"
                    onclick="careerInfo('Full Stack Developer')">

                    <div class="career-icon">💻</div>

                    <h3>Full-Stack Developer</h3>

                    <p>
                        Works across front-end
                        and back-end systems.
                    </p>

                </div>


                <div
                    class="career"
                    onclick="careerInfo('UI UX Designer')">

                    <div class="career-icon">✨</div>

                    <h3>UI/UX Designer</h3>

                    <p>
                        Designs interfaces and
                        user experiences.
                    </p>

                </div>


                <div
                    class="career"
                    onclick="careerInfo('DevOps Engineer')">

                    <div class="career-icon">🚀</div>

                    <h3>DevOps Engineer</h3>

                    <p>
                        Works with deployment,
                        automation and cloud systems.
                    </p>

                </div>


                <div
                    class="career"
                    onclick="careerInfo('Web Tester')">

                    <div class="career-icon">🧪</div>

                    <h3>Web Tester</h3>

                    <p>
                        Tests websites for functionality,
                        usability and reliability.
                    </p>

                </div>

            </div>


            <div
                id="careerOutput"
                class="info-box"
                style="margin-top:30px">

                Click a career above to learn more.

            </div>

        </section>

    `

};


/* =========================================================
   ROUTING
========================================================= */

function navigate(route, addHistory = true) {

    if (!pages[route]) {
        route = "home";
    }


    if (addHistory) {

        historyStack =
            historyStack.slice(0, historyIndex + 1);

        historyStack.push(route);

        historyIndex++;

    }


    renderPage(route);

}


function renderPage(route) {

    const content =
        pageTemplates[route]
            ? pageTemplates[route]()
            : pageTemplates.home();


    document.getElementById("pageContent").innerHTML = content;


    updateAddressBar(route);

    updateTab(route);

    updateStatus(
        `Loaded ${pages[route].title}`
    );

}


function updateAddressBar(route) {

    document.getElementById("addressInput").value =
        pages[route].url;

}


function updateTab(route) {

    const tab =
        document.querySelector(".tab");

    if (tab) {

        tab.innerHTML = `
            <span>🌐</span>
            <span>${pages[route].title}</span>
            <button class="close-tab">×</button>
        `;

    }

}


/* =========================================================
   BACK / FORWARD
========================================================= */

function goBack() {

    if (historyIndex > 0) {

        historyIndex--;

        const route =
            historyStack[historyIndex];

        navigate(route, false);

    }

}


function goForward() {

    if (historyIndex < historyStack.length - 1) {

        historyIndex++;

        const route =
            historyStack[historyIndex];

        navigate(route, false);

    }

}


function reloadPage() {

    const currentRoute =
        historyStack[historyIndex];

    renderPage(currentRoute);

    updateStatus("Page reloaded");

}


function goHome() {

    navigate("home");

}


/* =========================================================
   ADDRESS BAR / SEARCH
========================================================= */

function searchAddress() {

    const input =
        document
            .getElementById("addressInput")
            .value
            .trim()
            .toLowerCase();


    if (!input) {
        return;
    }


    let route = null;


    if (
        input.includes("html")
    ) {
        route = "html";
    }

    else if (
        input.includes("css")
    ) {
        route = "css";
    }

    else if (
        input.includes("javascript") ||
        input.includes("js")
    ) {
        route = "javascript";
    }

    else if (
        input.includes("concept")
    ) {
        route = "concepts";
    }

    else if (
        input.includes("test") ||
        input.includes("deploy")
    ) {
        route = "testing";
    }

    else if (
        input.includes("career") ||
        input.includes("job")
    ) {
        route = "careers";
    }

    else if (
        input.includes("home") ||
        input.includes("websphere.local")
    ) {
        route = "home";
    }


    if (route) {

        navigate(route);

    }

    else {

        alert(
            "Search demo: Try HTML, CSS, JavaScript, concepts, testing or careers."
        );

    }

}


function performHeroSearch() {

    const search =
        document
            .getElementById("heroSearch")
            .value
            .toLowerCase();


    if (search.includes("html")) {
        navigate("html");
    }

    else if (search.includes("css")) {
        navigate("css");
    }

    else if (
        search.includes("javascript") ||
        search.includes("js")
    ) {
        navigate("javascript");
    }

    else if (
        search.includes("career") ||
        search.includes("job")
    ) {
        navigate("careers");
    }

    else if (
        search.includes("test") ||
        search.includes("deploy")
    ) {
        navigate("testing");
    }

    else {

        alert(
            "Try searching for HTML, CSS, JavaScript, Testing or Careers."
        );

    }

}


/* =========================================================
   HTML EXPLORER
========================================================= */

function showElement(element) {

    const preview =
        document.getElementById("htmlPreview");


    const examples = {

        heading: `
            <h1>This is an H1 heading</h1>
            <p>&lt;h1&gt; creates a main heading.</p>
        `,

        paragraph: `
            <p>This is a paragraph element.</p>
            <p>&lt;p&gt; is used for paragraphs.</p>
        `,

        link: `
            <a href="#">This is a hyperlink</a>
            <p>The &lt;a&gt; element creates links.</p>
        `,

        image: `
            <div style="
                font-size:50px;
                text-align:center;
            ">
                🖼️
            </div>
            <p>The &lt;img&gt; element displays images.</p>
        `,

        list: `
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        `,

        button: `
            <button
                class="primary-button"
                onclick="alert('HTML button clicked!')">
                HTML Button
            </button>
        `,

        form: `
            <input
                type="text"
                placeholder="HTML form input"
                style="
                    padding:10px;
                    border:1px solid #ccc;
                    border-radius:6px;
                "
            >
        `,

        table: `
            <table border="1" cellpadding="10">
                <tr>
                    <th>Language</th>
                    <th>Purpose</th>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>Structure</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>Style</td>
                </tr>
            </table>
        `

    };


    preview.innerHTML =
        examples[element];

}


/* =========================================================
   CSS PLAYGROUND
========================================================= */

function changePadding() {

    const slider =
        document.getElementById("paddingSlider");

    const value =
        slider.value;


    const box =
        document.querySelector(".box-content");


    box.style.padding =
        `${value}px`;


    document.getElementById("paddingValue")
        .textContent = value;

}


/* =========================================================
   JAVASCRIPT LAB
========================================================= */

function greetUser() {

    const name =
        document
            .getElementById("nameInput")
            .value;


    const output =
        document.getElementById("jsOutput");


    if (!name) {

        output.textContent =
            "Please enter your name.";

        return;

    }


    output.textContent =
        `Hello, ${name}! JavaScript changed this content dynamically.`;

}


function eventDemo() {

    document.getElementById("eventOutput")
        .textContent =
        "✓ Click event detected! JavaScript is responding to your action.";

}


function changeCounter(amount) {

    counterValue += amount;


    document.getElementById("counter")
        .textContent = counterValue;

}


/* =========================================================
   TESTING
========================================================= */

function runTests() {

    const result =
        document.getElementById("testResult");


    const tests = [

        document.getElementById("pageContent") !== null,

        document.getElementById("addressInput") !== null,

        typeof navigate === "function",

        typeof showElement === "function",

        typeof changePadding === "function",

        typeof greetUser === "function",

        typeof changeCounter === "function"

    ];


    const passed =
        tests.filter(Boolean).length;


    result.textContent =
        `✓ Functional testing completed: ${passed}/${tests.length} tests passed.`;

}


/* =========================================================
   CAREERS
========================================================= */

function careerInfo(role) {

    const output =
        document.getElementById("careerOutput");


    const information = {

        "Frontend Developer":
            "Focuses on HTML, CSS, JavaScript, UI development and browser-based interactions.",

        "Backend Developer":
            "Works with servers, databases, APIs and server-side programming.",

        "Full Stack Developer":
            "Works across both front-end and back-end technologies.",

        "UI UX Designer":
            "Creates user interfaces and designs experiences that are easy and enjoyable to use.",

        "DevOps Engineer":
            "Works with automation, cloud infrastructure, CI/CD and deployment.",

        "Web Tester":
            "Tests websites for functionality, usability, compatibility and reliability."

    };


    output.innerHTML = `

        <h2>${role}</h2>

        <p style="margin-top:10px; line-height:1.7;">

            ${information[role]}

        </p>

    `;

}


/* =========================================================
   STATUS
========================================================= */

function updateStatus(message) {

    const status =
        document.getElementById("statusText");


    if (status) {

        status.textContent =
            message;

    }

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderPage("home");


        document
            .getElementById("backButton")
            .addEventListener(
                "click",
                goBack
            );


        document
            .getElementById("forwardButton")
            .addEventListener(
                "click",
                goForward
            );


        document
            .getElementById("reloadButton")
            .addEventListener(
                "click",
                reloadPage
            );


        document
            .getElementById("homeButton")
            .addEventListener(
                "click",
                goHome
            );


        document
            .getElementById("searchButton")
            .addEventListener(
                "click",
                searchAddress
            );


        document
            .getElementById("addressInput")
            .addEventListener(
                "keydown",
                function(event) {

                    if (event.key === "Enter") {

                        searchAddress();

                    }

                }
            );


        document
            .getElementById("newTab")
            .addEventListener(
                "click",
                () => {

                    navigate("home");

                    updateStatus(
                        "New tab opened"
                    );

                }
            );

    }
);