import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-800 text-white my-16 rounded-2xl">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl mb-2 font-semibold sm:text-4xl">Blog</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">The Four Kinds of React State to Manage <br />
                            01.Local state <br />
                            02.Global state <br />
                            03.Server  state <br />
                            04.URL  state
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br />
                            They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;