// Content for the Done4U client document at /done4u.
//
// Static markup, kept as one string so the document stays a faithful copy of
// what was approved rather than being re-flowed through JSX. Source of truth
// for the wording lives in the vault at
// ellis-d/Clients/jake-peters/onboarding/ (agreement.md + done4u-fill-in-form.md).
// If the wording changes there, change it here too.

export const DONE4U_CONTENT = `
<header class="masthead">
  <div class="wrap">
    <img class="logo" src="/brand-v2/wordmark-black.png" alt="Markit">
    <p class="eyebrow">Prepared for Jake Peters and Reid Seddon</p>
    <h1>Webinar Agreement<br>and Build Intake</h1>
    <p class="lede">Everything for the 3 September webinar in one place. Part one is the agreement, which is the bit to read first. Part two is what we need from you to build it.</p>
    <div class="partmeta">
      <span>14 August 2026</span>
      <span>Markit &times; Done4U</span>
      <span>Webinar: 3 Sept</span>
    </div>
  </div>
</header>

<div class="wrap">

<!-- ==================== PART ONE ==================== -->

<div class="part">
  <p class="part-label">Part One</p>
  <h2>The Agreement</h2>
</div>

<p><strong>Nothing here is binding until both sides sign.</strong> This is a plain-language commercial agreement between two businesses. It is not legal advice. If either side wants it papered properly by a solicitor, say so and we will.</p>

<section>
  <div class="sec-head"><span class="sec-num">1</span><h3>Who this is between</h3></div>
  <div class="table-scroll">
    <table>
      <tbody>
        <tr><td style="width:8rem"><strong>Provider</strong></td><td>Ellis Deakin, ABN 23 303 821 499, trading as Markit</td></tr>
        <tr><td><strong>Client</strong></td><td>Done4U, represented by Jake Peters and Reid Seddon<br><span style="color:var(--text-soft)">Registered business name and ABN to be confirmed</span></td></tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <div class="sec-head"><span class="sec-num">2</span><h3>What we are doing</h3></div>
  <p>Markit designs, builds and runs the technical system for a live webinar promoting Done4U's offers. Done4U presents it and closes the sales.</p>

  <div class="panel">
    <h4>Markit provides</h4>
    <ul>
      <li>The full funnel: registration page, confirmation page, replay page</li>
      <li>The webinar presentation, written and built from the intake form</li>
      <li>Every email in the sequence: promo, reminder, live, replay, follow up</li>
      <li>Text message sequences and the automation behind them</li>
      <li>CRM setup and the automations that run the whole thing</li>
      <li>Dialer recruitment and management</li>
      <li>Live technical management on the day, including the chat</li>
      <li>Tracking, so the numbers are real rather than guessed</li>
    </ul>
  </div>

  <div class="panel">
    <h4>Done4U provides</h4>
    <ul>
      <li><strong>The software.</strong> The whole stack is yours, on your accounts and paid for by you. That includes <strong>WebinarJam</strong>, the CRM, the email tool and anything else the campaign runs on. We build inside what you already have rather than reselling you tools</li>
      <li>Access to those accounts, plus the lists, in time for the build</li>
      <li>The completed intake form, on time</li>
      <li>Jake presents live</li>
      <li>Jake takes the closing calls</li>
      <li>The organic promotion across both partners' audiences</li>
    </ul>
  </div>

  <p><strong>Why it is split that way.</strong> Everything stays in Done4U's name, so if the two sides stop working together you keep the accounts, the data and the audience with nothing to untangle. Markit brings the build and the operating, not the subscriptions.</p>
</section>

<section>
  <div class="sec-head"><span class="sec-num">3</span><h3>The money</h3></div>

  <div class="panel hero">
    <h4>Setup fee</h4>
    <span class="money">$2,000 USD</span>
    <p style="color:var(--text-soft);margin:0">One time, payable before the build starts. It covers building the system, and the system is reusable. Running the same webinar again does not trigger a second setup fee.</p>
  </div>

  <div class="panel hero">
    <h4>Revenue share</h4>
    <span class="money">15%</span>
    <p style="color:var(--text-soft);margin:0">Of everything this webinar generates. Paid within 7 days of the money landing.</p>
  </div>

  <h4 style="font-family:var(--mono);font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-faint);margin:2rem 0 0.85rem">What the 15% attaches to</h4>

  <p><strong>15% of every dollar Done4U collects from anyone who bought as a result of this webinar.</strong> Cash collected, not contract value, so nothing is owed on a sale until the money actually lands.</p>

  <p><strong>Payment plans are included for their full term.</strong> If someone buys on a plan, the 15% applies to every instalment as it is collected, including the ones that land months after the webinar. The share follows the buyer, not the calendar.</p>

  <div class="note">
    <p><strong>Worked example.</strong> The webinar closes $50,000 in sales. $30,000 is collected on the day, and $20,000 sits in payment plans. Ellis is paid $4,500 on the first $30,000, then 15% of each plan instalment as it comes in, adding up to $3,000 across the remaining $20,000. Total $7,500, paid as the money arrives rather than upfront.</p>
  </div>

  <p><strong>Only this webinar counts.</strong> Sales from Done4U's normal inbound, affiliates, DMs or any other source are not included, whether they happen before, during or after. A buyer counts if they registered for or attended this webinar, or came in through its follow-up sequence.</p>

  <p>Done4U shares the sales and collections figures with Ellis so both sides are working off the same number. Tracking is part of what Markit is building, so this should be a report rather than an argument.</p>

  <div class="panel">
    <h4>Payment</h4>
    <p><a href="https://wise.com/pay/me/ellisd68">wise.com/pay/me/ellisd68</a></p>
    <p style="color:var(--text-soft);margin:0">Both the setup fee and the revenue share are paid in USD. Full bank details available on request if a transfer needs them.</p>
  </div>
</section>

<section>
  <div class="sec-head"><span class="sec-num">4</span><h3>The guarantee</h3></div>

  <div class="panel hero">
    <p style="font-weight:700;font-size:1.05rem;margin-bottom:0.75rem">If this webinar has not generated $20,000 USD in revenue within 14 days of the webinar date, the $2,000 USD setup fee is refunded in full.</p>
    <p style="color:var(--text-soft);margin:0"><strong>Assessment date: 17 September 2026.</strong> By then every sales call from the webinar has happened, so the number is real rather than half-counted.</p>
  </div>

  <p><strong>Revenue generated, not cash collected.</strong> A $6,000 sale on a payment plan counts as $6,000 against the threshold on the day it is signed, even though the money arrives over months. The threshold is asking whether the webinar worked, so it measures what was sold.</p>

  <p>This is deliberately different from the revenue share in section 3, which is paid on cash as it lands. The two clauses answer different questions: section 4 asks whether the webinar did its job, section 3 sets what gets paid and when.</p>

  <p>If the refund is due, it is paid within 7 days of the assessment date.</p>

  <p>This is the whole reason the setup fee came down from the $5,000 discussed on the call. Ellis carries the build risk. Done4U carries the delivery risk, which is showing up, presenting, and taking the calls.</p>

  <p>The guarantee assumes Done4U does its part: the intake form back on time, the promotion actually run across both audiences, and Jake on the closing calls. If the webinar does not happen, or underperforms because the client did not deliver those, the guarantee does not apply.</p>
</section>

<section>
  <div class="sec-head"><span class="sec-num">5</span><h3>What is not included</h3></div>
  <p>These are real costs and they sit on top of the fees above. None of them are Markit margin.</p>
  <div class="table-scroll">
    <table>
      <thead><tr><th>Item</th><th>Rough cost</th><th>Who pays</th></tr></thead>
      <tbody>
        <tr><td><strong>WebinarJam</strong></td><td>Your existing subscription</td><td>Done4U</td></tr>
        <tr><td><strong>CRM, email and any other software</strong></td><td>Your existing subscriptions</td><td>Done4U</td></tr>
        <tr><td>Setters</td><td>5% of what they set</td><td>Done4U, direct</td></tr>
        <tr><td>Dialers</td><td>Market rate, agreed before hiring</td><td>Done4U</td></tr>
        <tr><td>Texting platform (SendBlue or equivalent)</td><td class="num">~$1,000 USD/mo per line</td><td>Done4U</td></tr>
        <tr><td>Ad spend</td><td>Not applicable, webinar one is organic only</td><td>Done4U</td></tr>
      </tbody>
    </table>
  </div>
  <p>Markit will not commit Done4U to any of these without written approval first.</p>
</section>

<section>
  <div class="sec-head"><span class="sec-num">6</span><h3>Timeline</h3></div>
  <div class="table-scroll">
    <table>
      <thead><tr><th>Milestone</th><th>Date</th></tr></thead>
      <tbody>
        <tr><td>Setup fee paid and intake form returned</td><td>On signing</td></tr>
        <tr><td>Build complete</td><td>Week commencing 25 August 2026</td></tr>
        <tr><td>Promo sprint opens</td><td>27 August 2026, 7 days out</td></tr>
        <tr><td><strong>Webinar</strong></td><td><strong>Thursday 3 September 2026</strong></td></tr>
        <tr><td>Closing calls</td><td><strong>3 to 6 September</strong>, starting the day of the webinar or the day after and running for two to three days</td></tr>
      </tbody>
    </table>
  </div>
  <p>The webinar date can move once, by agreement, if the intake form is late. It cannot move twice.</p>
</section>

<section>
  <div class="sec-head"><span class="sec-num">7</span><h3>Ownership</h3></div>
  <p>Everything Markit builds for this webinar belongs to Done4U once the setup fee is paid. Funnel, presentation, emails, sequences, all of it. Markit keeps the right to reference the work and the results, with real names, unless Done4U says otherwise in writing.</p>
  <p>Done4U's lists, audience, brand assets and client data stay theirs throughout. Markit does not contact Done4U's list for any purpose other than this campaign.</p>
</section>

<section>
  <div class="sec-head"><span class="sec-num">8</span><h3>After the first webinar</h3></div>
  <p><strong>This agreement covers one webinar.</strong> Everything in it, the setup fee, the 15%, and the guarantee, applies to the 3 September webinar and nothing else.</p>
  <p>Neither side is locked in beyond that. Both sides go in expecting to run these regularly if the first one works, and the terms for that get <strong>renegotiated once this webinar is finished</strong> and both sides can see what the numbers actually look like. Nothing about the rate on webinar one sets the rate on webinar two.</p>
  <p>The revenue share on this webinar keeps running through payment plans regardless of what gets agreed next, or of whether anything gets agreed at all.</p>
  <p>Jake raised on the call that Eva may run a duplicate funnel with her own story swapped in. That is a separate build and a separate agreement.</p>
</section>



<!-- ==================== PART TWO ==================== -->

<div class="part">
  <p class="part-label">Part Two</p>
  <h2>The Build Intake</h2>
</div>

<p>This is everything Markit needs to build your webinar. Fill it in once and it becomes the thing we work from, so nothing gets invented and nothing gets guessed.</p>

<p>We already covered a lot on the call and we have watched both of your masterclasses, so this is shorter than it looks. A good third of it is us reading back what we already have for you to tick or correct.</p>

<p>If you do not know something, write "don't know" and move on. Do not leave a gap and do not make something up. We would rather have a hole we know about than a number you cannot stand behind on a live call.</p>

<div class="note">
  <p><strong>Section 2 is Jake's and section 3 is Reid's.</strong> Do those two on your own, and do not read each other's until you have both finished. We are pulling two voices out of this, and if you write them together they come out sounding like one person who does not exist. Everything else you answer between you.</p>
  <p><strong>Do not put passwords in here.</strong> We set access up together on a screen share.</p>
</div>






<section>
    <div class="sec-head"><span class="sec-num">00</span><h3>What we already have</h3></div>
    <p class="sec-intro">From the call on 14 August. Correct anything wrong, tick anything right.</p>
    <div class="table-scroll">
      <table>
        <thead><tr><th>What we heard</th><th class="tick">Right?</th></tr></thead>
        <tbody>
          <tr><td>Flagship community offer is <strong>$6,000 USD</strong></td><td class="tick"><div></div></td></tr>
          <tr><td>One to one is <strong>$12,000 USD</strong></td><td class="tick"><div></div></td></tr>
          <tr><td>Jake takes all the closing calls himself</td><td class="tick"><div></div></td></tr>
          <tr><td>You have DM setters already, no dialers</td><td class="tick"><div></div></td></tr>
          <tr><td>CRM is <strong>Maxed</strong>, email works, texting does not</td><td class="tick"><div></div></td></tr>
          <tr><td>Roughly 1,000+ people on the email list</td><td class="tick"><div></div></td></tr>
          <tr><td>Old webinar WhatsApp chats plus Eva's 160 person chat</td><td class="tick"><div></div></td></tr>
          <tr><td>Your first solo webinar did about <strong>$60,000 AUD</strong></td><td class="tick"><div></div></td></tr>
          <tr><td>Eva's webinar pulled <strong>250 registrants</strong> from her account alone</td><td class="tick"><div></div></td></tr>
          <tr><td>Your own organic push got about <strong>160 signups</strong>, 100 into WhatsApp</td><td class="tick"><div></div></td></tr>
          <tr><td>You reckon you can get <strong>100 people live</strong> organically</td><td class="tick"><div></div></td></tr>
          <tr><td>Neither of you has run a lead gen push on your mains in 1 to 2 months</td><td class="tick"><div></div></td></tr>
          <tr><td>Jake's Meta DMs are restricted across all accounts, no fix found</td><td class="tick"><div></div></td></tr>
          <tr><td>Eva sits out webinar one because her account is restricted too</td><td class="tick"><div></div></td></tr>
          <tr><td>Webinar one is organic only, no ad spend</td><td class="tick"><div></div></td></tr>
        </tbody>
      </table>
    </div>
    <p class="sec-intro" style="margin-top:2rem;">We also watched both Personal Brand Masterclasses, so we have this too:</p>
    <div class="table-scroll">
      <table>
        <thead><tr><th>What we heard</th><th class="tick">Right?</th></tr></thead>
        <tbody>
          <tr><td>The offer is the <strong>Brand Suite System</strong>: course, then community, then one to one</td><td class="tick"><div></div></td></tr>
          <tr><td>It is <strong>consulting, not done-for-you</strong>. "Done4U" is a play on words</td><td class="tick"><div></div></td></tr>
          <tr><td>Community is group calls plus WhatsApp access plus the course, 100+ members</td><td class="tick"><div></div></td></tr>
          <tr><td>You price anchor on the top tier and downsell on the call, never upsell</td><td class="tick"><div></div></td></tr>
          <tr><td>Fulfilment runs on <strong>WhatsApp and Notion</strong> only, plus a Loom library</td><td class="tick"><div></div></td></tr>
          <tr><td>Business founded <strong>16 January</strong>. Months went $20k, $30k, $112k, $150k, $150k, then <strong>$210k at a 95% margin</strong></td><td class="tick"><div></div></td></tr>
          <tr><td>Roughly <strong>63 booked calls</strong> last month, close rate around <strong>87%</strong></td><td class="tick"><div></div></td></tr>
          <tr><td><strong>10 million views in 30 days</strong> across both accounts</td><td class="tick"><div></div></td></tr>
          <tr><td>Team is the two of you plus Ange on DMs, one CSM, one VA</td><td class="tick"><div></div></td></tr>
          <tr><td>Zero paid advertising, ever</td><td class="tick"><div></div></td></tr>
        </tbody>
      </table>
    </div>
    <div class="q">
      <p>Anything in there we got wrong, or anything that has changed since the call?</p>
      <div class="field"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">01</span><h3>The offer</h3></div>
    <p class="sec-intro">This is what the whole back half of the presentation is built on, so give it proper detail rather than a summary.</p>

    <div class="q">
      <p>The $6k community: what does someone actually get? <span class="hint">Week by week, or module by module. Calls, trainings, community, who runs what, how long they have access</span></p>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>The $12k one to one: what is different about it, and who is it right for?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Which one are we selling on this webinar? <span class="hint">One, both, or one with the other as an upsell</span></p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Payment plans: what do you accept, minimum deposit, over how long?</p>
      <div class="note">
        <p>Answer this one precisely. It changes how the money is presented on the webinar, and it feeds the revenue terms in the agreement. What percentage of your buyers normally take a plan rather than paying in full?</p>
      </div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Is there a guarantee or refund policy? <span class="hint">The exact wording you would stand behind live on a webinar with a few hundred people watching</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Who fulfils what? <span class="hint">You, Reid, Eva, coaches, anyone else</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What is in Done4U that a competitor genuinely cannot copy?</p>
      <div class="note">
        <p>You already have a named mechanism, the Brand Suite System, and it is good. What we want is the part underneath it: why does the ladder actually get people results that a course on its own does not? That answer is what stops the webinar being another "here is how to grow on Instagram" training.</p>
      </div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>How many new clients can you take in September before delivery quality drops?</p>
      <div class="note">
        <p>Every scarcity line we write comes off this number, so it needs to be the real one rather than the ambitious one.</p>
      </div>
      <div class="field short"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">02</span><h3>Jake, your story</h3></div>
    <p class="sec-intro">Fill this in on your own. This is the spine of the first third of the presentation and it is the highest leverage thing in the document. We already have the outline from your masterclass, so we are not asking you to repeat it.</p>

    <div class="panel">
      <h4>What we already have</h3>
      <p>Grew up near the water, captain at 19, decided it was not the path. Went to uni for business, dropped out because "I may as well just start my own". Worked at a marketing agency, saw what ads did for founders but nobody using organic. Moved to Bali, posted daily. First dollar online at 3,000 followers doing fitness coaching, scaled it to $10k/mo, then quit it because "I don't want to get people abs". Head coach inside Alfie Robinson's community, then out on your own, then merged with Reid on 16 January.</p>
    </div>

    <div class="q">
      <p>Correct anything wrong up there.</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>The day you decided to stop being a captain. Where were you, what happened?</p>
      <div class="note"><p>Not "I realised it wasn't the path". The actual day. What you were doing, who you were with, what was said. We want the scene, not the summary.</p></div>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>What were you earning as a captain, and what were the hours?</p>
      <div class="note"><p>Without the before number, the after number has nothing to push against.</p></div>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>What nearly made you quit?</p>
      <div class="note"><p>There is no low point anywhere in your masterclass. 60 minutes of everything going right. That is fine in a workshop and it is death on a webinar, because the audience needs to see you at the point they are at now. What went wrong, when did you think it was not going to work, and what did you nearly do about it?</p></div>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>The gap between the first dollar at 3k followers and $10k/mo. How long, and what happened in it?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What did people around you say when you dropped out and moved to Bali?</p>
      <div class="note"><p>Family, mates, anyone. This is the exact fear sitting in your audience, so whatever you actually heard is worth more than anything we could write.</p></div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Why did you really leave Alfie's? <span class="hint">"No one wants a boss" is the short version. What is the long one?</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Your bio says "21 building Australia's largest social media agency". Where did that come from, and what does the finished version look like?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Your own numbers we can use publicly. <span class="hint">The income figure you will stand behind, when you hit it, and where the screenshots live</span></p>
      <div class="note"><p>We have your month by month from the masterclass: $20k, $30k, $112k, $150k, $150k, then $210k at a 95% margin. <strong>That curve is far stronger than any single number</strong> and it is what we want to build the proof beat around, so confirm it is right and tell us what the last two months have been.</p><p>One thing to be precise about: your May video title says "$112k per month (Profit)" but on camera the $112k is revenue at a 95% margin. Tell us which each number is, revenue or profit, and where the screenshots live.</p></div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>How you got to 69k followers, honestly. <span class="hint">What actually worked versus what you thought would work</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Words and claims you will not make. <span class="hint">Any income claim you will not stand behind, and how much you swear on a live webinar</span></p>
      <div class="field"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">03</span><h3>Reid, your story</h3></div>
    <p class="sec-intro">Same deal. On your own, without reading Jake's. We have your outline already too.</p>

    <div class="panel">
      <h4>What we already have</h3>
      <p>Psychology degree, finished it. Working in disability support and liked it, "but I knew there was more out there for me". Saw creators living a life you had never seen, took the risk and quit the job. Started posting daily around the same time Jake did. Met him because you were the only two people making content in your area and a mutual friend connected you, and he drove to your house at 4am to film the sunrise at Bondi.</p>
    </div>

    <div class="q">
      <p>Correct anything wrong up there.</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>The day you decided to quit disability support. Where were you, what happened?</p>
      <div class="note"><p>The scene, not the summary. You said "I knew there was more out there for me", which is the conclusion. We want the moment you reached it.</p></div>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>What were you earning in that job?</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>What nearly made you quit content?</p>
      <div class="note"><p>Same note as Jake. There is no low point anywhere in either masterclass, and a webinar audience needs to see you at the stage they are at now, not just where you ended up.</p></div>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>You finished the psychology degree even after deciding not to use it. Why?</p>
      <div class="note"><p>Small detail, but it says something real about you and it is the kind of thing an audience remembers longer than a number.</p></div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What did people say when you quit a job you liked to post videos?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>The 100k in 11 months run. Walk us through it properly. <span class="hint">What you were doing at the start, what changed, and which parts were luck versus which parts are repeatable</span></p>
      <div class="note">
        <p>This is the single most sellable asset either of you has for this audience. It is a specific number over a specific timeframe with a named person attached. Give us the month by month if you have it.</p>
        <p>One thing to sort out first. Your April video says <strong>80,000 followers in 3 months</strong>, your May video says <strong>80,000 in 6 months</strong>, and your Instagram highlight says <strong>100k in 11 months</strong>. Those cannot all be right. Tell us the real timeline and we will build everything off that one version.</p>
      </div>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>We saw the "I almost died" post. If you are happy to talk about it, what happened and how did it change what you did next?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>You run @reidseddon and @reidbranded. What is the job of each, and which actually brings in clients?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What is your role on the day? <span class="hint">Co-presenting, intro only, in the chat, or not on camera</span></p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Words and claims you will not make</p>
      <div class="field"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">04</span><h3>Proof</h3></div>
    <p class="sec-intro">Nothing goes in the presentation, in an email, or on the reg page without a real name and something to back it up. This section unblocks the most work.</p>

    <div class="q">
      <p>Your best 5 to 10 client results. <span class="hint">Real first name, where they started, where they got to, over what timeframe, and what it was worth to them in money if you know</span></p>
      <div class="note"><p>From your masterclass deck we already have <strong>Kaylee</strong> (B2B closer, $0 to $200k/mo in 2 months, 4k to 10k followers in 30 days), <strong>Colby</strong> (115k followers in 3 months, $35k MRR from a $59 community), <strong>Marco</strong> (fitness, 40k in 3 months), <strong>Clay</strong> ($30k/mo, 42.6k followers off 49 posts) and <strong>Tri</strong> (first client, now your CSM). Confirm those, send the screenshots, then add anyone we are missing.</p><p>Two things to fix while you are there. Your deck says Kaylee took 2 months and your YouTube title says 12 weeks. And is Kaylee the "sales coach" from the July video, or is that someone else? We use one version of each, everywhere.</p></div>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>Screenshots for each. <span class="hint">Follower graphs, revenue screenshots, DMs, dashboards. Phone screenshots are fine, do not tidy them up</span></p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Written clearance for each one, confirming we can use their real first name publicly</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Honestly: of every client you have taken on, how many got the result and how many did not?</p>
      <div class="note">
        <p>We want the real number. It changes how the presentation is written, and saying it out loud on the webinar is one of the strongest things you can do with an audience that has been sold to as hard as yours has.</p>
      </div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>The "30,000+ followers in 30 days" claim on your Maxed page. Whose result was that, and do you have the evidence?</p>
      <div class="note alert">
        <p>Read this one properly. It is fine as organic content. On a live webinar with a recording, and later in a paid ad, it is a specific time-bound result claim on a make-money offer. That is the exact shape that gets ad accounts restricted, and given the DM situation you cannot afford another Meta problem.</p>
        <p>If it is evidenced we will use it hard. If it is not, we cut it and lose nothing.</p>
      </div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Any video testimonials, however rough</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>What did the $60k AUD webinar actually close, and how many buyers was that?</p>
      <div class="field short"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">05</span><h3>The audience</h3></div>

    <div class="q">
      <p>Describe your best client. <span class="hint">What they do, what they earn, how big their audience is, what stage they are at</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What is actually stopping them from growing their own brand today?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What do they believe about growing online that is wrong?</p>
      <div class="note">
        <p>This becomes the big idea of the webinar. It is the belief we have to break in the first fifteen minutes before anything else lands.</p>
      </div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>The top 3 things people say right before they say no. <span class="hint">Tell us which one you hear most</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>The top 3 things people say when they say yes</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>How they describe the problem in their own words. <span class="hint">Paste real DMs, redact the names</span></p>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>Which countries do your buyers come from, and what timezone is most of your list in?</p>
      <div class="note">
        <p>This decides what time we run the webinar. Get it wrong and the show rate halves.</p>
      </div>
      <div class="field short"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">06</span><h3>The presentation</h3></div>
    <p class="sec-intro">You are delivering this live, so it has to be yours. We write it, you own it.</p>

    <div class="q">
      <p>Send us the deck and recording from your last <em>webinar</em>, and Eva's if you have it.</p>
      <div class="note">
        <p>We have already watched your two Personal Brand Masterclasses on YouTube, so we have a decent picture of what you teach. What we want now is the actual webinar: the deck, the recording, and the offer section at the end. We are not copying it, we want to see the order you put things in and where the last one lost people. If there is a recording of you delivering it, that is worth more than the slides.</p>
      </div>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>What are the 3 things you could teach that would genuinely change someone's month?</p>
      <div class="note">
        <p>These become the three pillars. They need to be things you can teach in ten minutes each and that leave people better off even if they never buy.</p><p>Our read from your masterclasses: <strong>quality of follower</strong>, <strong>trial reels</strong>, and the <strong>two-account architecture</strong>. Trial reels alone got more questions from the room than everything else combined, which is exactly what a pillar should feel like. Tell us if you would pick differently.</p>
      </div>
      <div class="field tall"></div>
    </div>
    <div class="q">
      <p>What do you already say on calls that lands every time?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Is there a framework, process or set of steps you already use with clients? <span class="hint">Even if it has no name yet</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What questions do you get asked constantly?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>How long are you comfortable presenting for? <span class="hint">Most of these run 75 to 90 minutes including Q&amp;A</span></p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Have you got a webcam setup, decent mic and stable internet? <span class="hint">Be honest, we will fix it if not</span></p>
      <div class="field short"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">07</span><h3>What you already have</h3></div>

    <div class="q">
      <p>Your email list: how many, how did they get on it, and when did you last email them?</p>
      <div class="note">
        <p>Last emailed matters more than the size. A list that has not been touched in six months needs warming before promo or it tanks your domain.</p>
      </div>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>The old webinar WhatsApp groups: how many groups, how many people, are they still active?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Any phone numbers, and did those people opt in to being texted?</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Anything else with people in it. <span class="hint">Skool, Discord, a Close CRM, a spreadsheet, anything</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What have you promoted to these people before, and how did it go?</p>
      <div class="field"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">08</span><h3>Tech and access</h3></div>
    <div class="note">
      <p><strong>No passwords here.</strong> We screen share and set access up together. Takes ten minutes and it is safer than typing logins into a document.</p>
    </div>

    <div class="q">
      <p>Maxed: who set it up, do you both have logins, and who is your contact there?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Can you buy a phone number inside Maxed and call or text from it? <span class="hint">You were going to check with the guy</span></p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>WebinarJam: is your account live, who owns the login, and what plan are you on?</p>
      <div class="note"><p>The webinar runs on your WebinarJam. All the software stays in your name and on your accounts, we just build inside it. We need admin access in time for the build, and we will do a dry run with you before the day.</p></div>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Everything else in the stack, and who pays for it. <span class="hint">Anything we should know about renewals, seat limits or plans that might cap us</span></p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Where do closing calls get booked, and whose calendar?</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>How do you take payment, and is anything set up alongside it?</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Domains you own</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Who has admin on the Instagram accounts and the pages?</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Have you got a pixel installed anywhere, or any tracking data sitting in an account?</p>
      <div class="note">
        <p>Not needed for an organic webinar. It matters a lot for the paid ones after, so we want to start collecting from day one.</p>
      </div>
      <div class="field short"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">09</span><h3>Sales</h3></div>

    <div class="q">
      <p>Confirm: Jake takes every closing call, or do you want Reid on some?</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>How many calls a day can Jake take across 3 to 6 September?</p>
      <div class="note">
        <p>Closing calls start the day of the webinar or the day after and run for two to three days, so this is a tight window and it is the hardest cap on the whole campaign. Three days at your real daily limit is the ceiling on what this webinar can make, so give us the honest number rather than the best case. There is no point booking 60 calls into a diary that holds 20.</p>
      </div>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>If we fill those three days, do you want overflow calls the following week, or do we stop booking?</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Your setters: how many, what do they currently do, and are they on 5%?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>What does your current call look like? <span class="hint">Length, structure, and do you have a script</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Your current close rate on inbound calls, if you know it</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Dialers: we are hiring them. Anything you want us to know about how you want registrants spoken to?</p>
      <div class="field"></div>
    </div>
  </section>

<section>
    <div class="sec-head"><span class="sec-num">10</span><h3>Brand and compliance</h3></div>

    <div class="q">
      <p>Brand colours</p>
      <div class="swatches">
        <div class="swatch"><span>Primary</span><div></div></div>
        <div class="swatch"><span>Secondary</span><div></div></div>
        <div class="swatch"><span>Accent</span><div></div></div>
      </div>
    </div>
    <div class="q">
      <p>Have you got a logo, and who made it?</p>
      <div class="field short"></div>
    </div>
    <div class="q">
      <p>Is Done4U branded around the two of you, or is it its own thing separate from your faces?</p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Anything off limits. <span class="hint">Claims you will never make, competitors never to name, subjects to stay away from</span></p>
      <div class="field"></div>
    </div>
    <div class="q">
      <p>Any income claim disclaimers you already use, or that you need us to include</p>
      <div class="field"></div>
    </div>
  </section>

<div class="closing">
    <p>That is everything. The sections that unblock the most work are <strong>1 (the offer)</strong>, <strong>2 and 3 (your stories)</strong> and <strong>4 (proof)</strong>. If you only get to four, make it those, and get them back fast.</p>
    <p>The 3 September date works backwards from this form.</p>
  </div>
</div>
`;
