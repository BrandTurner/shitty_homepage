webpackJsonp([0xfcf2980e5c61],{443:function(n,a){n.exports={data:{post:{html:'<h1 id="angularjs-integration"><a href="#angularjs-integration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>AngularJS Integration</h1>\n<p>Warning: For new project, you should consider using <a href="/docs/client-generator/index">the API Platform\'s Progressive Web App generator</a>\n(that supports React and Vue.js) instead of this Angular v1 integration.</p>\n<h2 id="restangular"><a href="#restangular" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Restangular</h2>\n<p>API Platform works fine with <a href="http://angularjs.org" target="_blank" rel="nofollow noopener noreferrer">AngularJS v1</a>. The popular <a href="https://github.com/mgonto/restangular" target="_blank" rel="nofollow noopener noreferrer">Restangular</a>\nREST client library for Angular can easily be configured to handle the API format.</p>\n<p>Here is a working Restangular config:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> app <span class="token operator">=</span> angular\n    <span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">\'myAngularjsApp\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'RestangularProvider\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>RestangularProvider<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// The URL of the API endpoint</span>\n        RestangularProvider<span class="token punctuation">.</span><span class="token function">setBaseUrl</span><span class="token punctuation">(</span><span class="token string">\'http://localhost:8000\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// JSON-LD @id support</span>\n        RestangularProvider<span class="token punctuation">.</span><span class="token function">setRestangularFields</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            id<span class="token punctuation">:</span> <span class="token string">\'@id\'</span><span class="token punctuation">,</span>\n            selfLink<span class="token punctuation">:</span> <span class="token string">\'@id\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        RestangularProvider<span class="token punctuation">.</span><span class="token function">setSelfLinkAbsoluteUrl</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Hydra collections support</span>\n        RestangularProvider<span class="token punctuation">.</span><span class="token function">addResponseInterceptor</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> operation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// Remove trailing slash to make Restangular working</span>\n            <span class="token keyword">function</span> <span class="token function">populateHref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token string">\'@id\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    data<span class="token punctuation">.</span>href <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">\'@id\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token comment">// Populate href property for the collection</span>\n            <span class="token function">populateHref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">\'getList\'</span> <span class="token operator">===</span> operation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> collectionResponse <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">\'hydra:member\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                collectionResponse<span class="token punctuation">.</span>metadata <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n                <span class="token comment">// Put metadata in a property of the collection</span>\n                angular<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">\'hydra:member\'</span> <span class="token operator">!==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        collectionResponse<span class="token punctuation">.</span>metadata<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n                <span class="token comment">// Populate href property for all elements of the collection</span>\n                angular<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>collectionResponse<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token function">populateHref</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n                <span class="token keyword">return</span> collectionResponse<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token keyword">return</span> data<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="ng-admin"><a href="#ng-admin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ng-admin</h2>\n<p>If you want to use <a href="https://github.com/marmelab/ng-admin" target="_blank" rel="nofollow noopener noreferrer">ng-admin</a>, set the <a href="#restangular">Restangular</a> config,\nthen create your entities like in the following example :</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> nga <span class="token operator">=</span> NgAdminConfigurationProvider<span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> admin <span class="token operator">=</span> nga\n    <span class="token punctuation">.</span><span class="token function">application</span><span class="token punctuation">(</span><span class="token string">\'My First Admin\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">baseApiUrl</span><span class="token punctuation">(</span><span class="token string">\'http://localhost:8000\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> article <span class="token operator">=</span> nga<span class="token punctuation">.</span><span class="token function">entity</span><span class="token punctuation">(</span><span class="token string">\'articles\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\narticle<span class="token punctuation">.</span><span class="token function">identifier</span><span class="token punctuation">(</span>nga<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">\'@id\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\narticle<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>entityName<span class="token punctuation">,</span> viewType<span class="token punctuation">,</span> identifierValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">\'/\'</span> <span class="token operator">+</span> entityName<span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>viewType <span class="token operator">===</span> <span class="token string">\'ListView\'</span> <span class="token operator">||</span> viewType <span class="token operator">===</span> <span class="token string">\'CreateView\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> url<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> identifierValue <span class="token operator">?</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>identifierValue<span class="token punctuation">)</span> <span class="token punctuation">:</span> url<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\narticle<span class="token punctuation">.</span><span class="token function">listView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fields</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    nga<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">\'title\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    nga<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">\'content\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nadmin<span class="token punctuation">.</span><span class="token function">addEntity</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span><span class="token punctuation">;</span>\nnga<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span>admin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can look at what we have done as another exemple <a href="https://github.com/api-platform/admin" target="_blank" rel="nofollow noopener noreferrer">api-platform/admin</a>.</p>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-different-serialization-groups-per-operation",title:"Using Different Serialization Groups per Operation"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per Item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"errors",title:"Error Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"},{id:"partial-pagination",title:"Partial Pagination"}]},{id:"events",title:"The Event System",anchors:null},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"external-vocabularies",title:"Using External JSON-LD Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending JSON-LD context",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:'Injecting the Serializer in an "ItemDataProvider"'}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"security",title:"Security",anchors:null},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"jwt",title:"Adding a JWT authentication using LexikJWTAuthenticationBundle",anchors:[{id:"testing-with-swagger",title:"Testing with Swagger"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"swagger",title:"Swagger Support",anchors:[{id:"override-swagger-documentation",title:"Override Swagger documentation"}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"dto",title:"Handling Data Transfer Objects (DTOs)",anchors:null}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null}]}},{node:{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process",anchors:null},{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/angularjs-integration",current:{path:"docs/core/angularjs-integration",title:"The API Component - AngularJS Integration"},prev:{path:"docs/core/nelmio-api-doc",title:"NelmioApiDocBundle integration",rootPath:"The API Component"},next:{path:"docs/core/swagger",title:"Swagger Support",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-angularjs-integration-9d657b787405fdda6621.js.map