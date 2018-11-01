import React, { Component } from 'react';
import Lessons from './LessonsPage';
import { Route } from 'react-router-dom';
import renderHTML from 'react-render-html';

class StudyPage extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div className="stepper rounded">
                                <div className="step">
                                    <div>
                                        <div className="circle"><i className="fa fa-check" /></div>
                                    </div>
                                    <div>
                                        <div className="title">First Step</div>
                                        <div className="caption">Optional</div>
                                    </div>
                                </div>
                                <div className="step step-active">
                                    <div>
                                        <div className="circle">2</div>
                                    </div>
                                    <div>
                                        <div className="title">Second Step</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div>
                                        <div className="circle">3</div>
                                    </div>
                                    <div>
                                        <div className="title">Third Step</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div>
                                        <div className="circle">3</div>
                                    </div>
                                    <div>
                                        <div className="title">Third Step</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div>
                                        <div className="circle">3</div>
                                    </div>
                                    <div>
                                        <div className="title">Third Step</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div>
                                        <div className="circle">3</div>
                                    </div>
                                    <div>
                                        <div className="title">Third Step</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div>
                                        <div className="circle">3</div>
                                    </div>
                                    <div>
                                        <div className="title">Third Step</div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div>
                                        <div className="circle">3</div>
                                    </div>
                                    <div>
                                        <div className="title">Third Step</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="studypage-navbar rounded d-flex align-items-center justify-content-center">
                                <h3 className="text-center lead studypage-navbar__item">Course content</h3>
                            </div>
                            <div className="studypage-content rounded">
                                {renderHTML(`<div>Auto margins</div>
<p>Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (<code class="highlighter-rouge">.mr-auto</code>), and pushing two items to the left (<code class="highlighter-rouge">.ml-auto</code>).</p>
<p><strong>Unfortunately, IE10 and IE11 do not properly support auto margins on flex items whose parent has a non-default&nbsp;<code class="highlighter-rouge">justify-content</code>&nbsp;value.</strong>&nbsp;<a href="https://stackoverflow.com/a/37535548">See this StackOverflow answer</a>&nbsp;for more details.</p>
<div class="bd-example">
<div class="d-flex bd-highlight mb-3">
<div class="p-2 bd-highlight">Flex item</div>
<div class="p-2 bd-highlight">Flex item</div>
<div class="p-2 bd-highlight">Flex item</div>
</div>
<div class="d-flex bd-highlight mb-3">
<div class="mr-auto p-2 bd-highlight">Flex item</div>
<div class="p-2 bd-highlight">Flex item</div>
<div class="p-2 bd-highlight">Flex item</div>
</div>
<div class="d-flex bd-highlight mb-3">
<div class="p-2 bd-highlight">Flex item</div>
<div class="p-2 bd-highlight">Flex item</div>
<div class="ml-auto p-2 bd-highlight">Flex item</div>
</div>
</div>
<div class="bd-clipboard"><button class="btn-clipboard" title="" data-original-title="Copy to clipboard">Copy</button></div>
<div class="highlight">
<pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"d-flex"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"d-flex"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"mr-auto p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span>

<span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"d-flex"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
  <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"ml-auto p-2"</span><span class="nt">&gt;</span>Flex item<span class="nt">&lt;/div&gt;</span>
<span class="nt">&lt;/div&gt;</span></code></pre>
</div>
<div>With align-items</div>
<p>Vertically move one flex item to the top or bottom of a container by mixing&nbsp;<code class="highlighter-rouge">align-items</code>,&nbsp;<code class="highlighter-rouge">flex-direction: column</code>, and&nbsp;<code class="highlighter-rouge">margin-top: auto</code>&nbsp;or&nbsp;<code class="highlighter-rouge">margin-bottom: auto</code>.</p>`)}


                            </div>
                            <div className="studypage-content rounded">
                                <video width={"100%"} controls>
                                    <source src="https://res.cloudinary.com/quanglibrary/video/upload/v1540483897/samples/elephants.mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default StudyPage;