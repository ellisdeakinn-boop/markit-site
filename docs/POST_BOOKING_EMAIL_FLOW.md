# Markit · Post-Booking Email + Manual Touch Flow (Neo / Jeremy Haynes standard)

The CRM-side sequence that runs alongside the Calendly Workflows ([CALENDLY_WORKFLOWS.md](./CALENDLY_WORKFLOWS.md)). This is the value-dense layer that moves the lead from Curiosity → Conviction before the call. Built on Jeremy Haynes' Neo pre-call playbook + adapted to Markit's ICP (local service businesses doing $500K+/yr).

## The thesis

Show rate is downstream of interest level. Interest level is downstream of how many useful touches you give the lead between booking and the call. The default agency sends 1 confirmation email and 1 reminder and wonders why show rate sits at 45%.

We're going to send:

- **1 manual SDR text** inside the first hour (Jeremy's "30% show-rate multiplier")
- **10 emails** spaced across the gap between booking and call
- **2 selfie videos** (recorded once, personalized per lead)
- **The Calendly automation layer** (welcome, T-24h prep, T-2h SMS, T-10min SMS) running underneath everything

Result: 70-80% show rate instead of 40-50%, and people land on the call already at High Interest, not still at Curiosity.

---

## Architecture

| Layer | What it does | Tool |
|---|---|---|
| **Calendly** | Reminders + no-show recovery + welcome | Calendly Workflows |
| **CRM sequence** | 10 value-dense emails between book and call | GoHighLevel / ActiveCampaign / Smartlead |
| **Manual SDR** | Text + selfie video from Ellis's phone | iMessage + Loom or native camera |
| **Post-call** | Recap + 4-email close sequence | CRM (template-driven) |

---

## Setup

| Item | Value |
|---|---|
| **Sending tool** | GoHighLevel / Smartlead / ActiveCampaign / HubSpot |
| **Webhook source** | Calendly `Invitee Created` → CRM creates contact + starts sequence |
| **From** | `ellis@markiting.agency` (or `shema@`) |
| **Reply-to** | Same |
| **Voice** | Direct, conversational, no em dashes, no emojis, no profanity, proof-first |
| **Signature** | `Ellis Deakin / Co-Founder, Markit / markiting.agency` |

---

# Layer 1 · Manual SDR touch (T + 60 min)

**This is the single highest-leverage move in the sequence.** Jeremy's data: lifts show rate by ~30 percentage points. Cannot be automated. Sent manually from your iPhone to their mobile number.

## The text

```
Hey {{first_name}}, Ellis from Markit here. Got your booking for {{event_day}}.

Two things I can send you that match where you said you're at. A 6-minute Loom of how we'd structure the first 30 days for a local service business like yours, OR a written breakdown of the Pocket Dispo campaign we shot that pulled 21M views (and how we'd apply that thinking to your category).

Which would be more useful, and want it here as a text or email?
```

## Why this works (per Jeremy)
- Personal, sent from a real phone number, not automation
- Offers two specific assets so they have to pick (engagement bait)
- Re-confirms you as the human they're talking to
- Gets a thread going that you can keep alive until the call

## When to send
Within 60 minutes of the booking notification firing. Set up a webhook from Calendly that pings your phone (Zapier → SMS to you with the lead's name + number) so you can fire this fast.

---

# Layer 2 · Pre-call CRM email sequence (10 emails)

All emails re-link `https://markiting.agency/booking-confirmed` so the prep page does heavy objection-handling in parallel.

## Email 01 · Welcome + confirmation resend (T + 5 min)

**Purpose:** Confirm the booking, point them at the prep page, ask the engagement-bait question.

**Subject:** Locked in for {{event_date}}
**Preheader:** Everything you'd want to know before we talk.

```
{{first_name}},

You're booked for {{event_date_time}}. Looking forward.

I put together a page with the answers to every question local service business owners ask before they hire us. Pricing, contract length, what kind of clients do well, what kind don't, how we're different from the agency that burned you last time. Worth a five minute read:

https://markiting.agency/booking-confirmed

The call is 30 minutes. No deck. No pitch.

One thing that helps me come prepared. Reply with one sentence on the number you actually care about in the next 90 days. Booked calls, walk-ins, monthly revenue, whatever it is.

Talk soon,
Ellis
```

---

## Email 02 · FAQ attack (T + 3 hours)

**Purpose:** Kill the doubts that prevent show-ups. Re-link the prep page. Mention worst-case openly.

**Subject:** Three things people ask before they hire us
**Preheader:** Pricing, contracts, and the kind of client who actually wins.

```
{{first_name}},

A few hours after booking is when the second-guessing starts. Three answers up front so it doesn't.

1. Pricing. We're not the cheapest agency you'll talk to. We're also not the most expensive. We sit where a senior in-house operator who actually does the work sits. If you're price-shopping, there are cheaper places to land and we won't be offended.

2. Contract. 90 days minimum, then month to month with 30 days notice. The 90 day floor is honest. Anything shorter doesn't give a marketing engine a fair shot.

3. The clients who do well with us are owners who can approve creative inside five business days, businesses that follow up on leads inside 30 minutes, and founders who'll be on camera at least sometimes. If you recognize the opposite in yourself, the engagement will struggle. Better to know.

Seven more answers on the prep page if you want them:
https://markiting.agency/booking-confirmed

Ellis
```

---

## Email 03 · Engagement bait (T + 24 hours)

**Purpose:** Get them to reply. Two specific value assets, let them pick. Builds the thread.

**Subject:** Quick ask before our call
**Preheader:** Two assets, pick the one that fits your situation.

```
{{first_name}},

Before our call I want to send you something useful that matches where you said you're at.

Two options:

A. The breakdown of how Pocket Dispo went from a single brand-deal shoot to 21M views in 30 days, plus what we'd do differently for a local service business than a consumer product brand.

B. A 6-minute Loom of me walking through what the first 30 days of a Markit engagement actually looks like, end to end, for a local service business.

Reply with A or B and I'll send it across. You can have both if you want, but pick one to start.

Ellis
```

---

## Email 04 · Why people don't show (T + 36 hours)

**Purpose:** Direct counter to the most common "I'll cancel" reasoning. Disarm the script before it runs.

**Subject:** The four reasons people cancel on us
**Preheader:** And the actual answer to each.

```
{{first_name}},

Most of the people who book and don't show have the same handful of reasons running in their head. Worth getting ahead of them.

"I'm going to be wasting their time." Not how it works. The call is 30 minutes. Even if we agree we're not a fit, you walk away with a tighter read on what's actually broken in your marketing.

"I don't have a budget yet." That's the call. We figure out scope and whether the math works for you. No pressure to commit.

"My situation is too specific. They probably can't help." The site shows the partner list. We've worked across more verticals than the headline reads. The call is where we find out if we've actually solved your specific problem before.

"I'll just reschedule next week." You probably won't. The interest you have right now is what gets the call done. Next week you'll be putting out a different fire.

If any of those are running for you, reply and let's talk it through before {{event_day}}.

Ellis
```

---

## Email 05 · Real urgency (T + 48 hours)

**Purpose:** Move them up the interest spectrum by reframing their market position. No fake scarcity. Real reason to act now.

**Subject:** Why local service ad costs are up 30% this year
**Preheader:** And what it means for whoever moves first in your market.

```
{{first_name}},

Quick reality check on local service marketing in 2026.

Average Meta CPM in the local service category is up 30% year over year. Google Local Service Ads cost per lead in legal, home services, and healthcare is up 22%. National competitors are flooding into local markets through programmatic. Your market gets more expensive every quarter.

The brands that win local from here are not the ones that show up first to the auction with the biggest budget. They're the ones with the best creative, the fastest follow-up, and the most owned content compounding in the background.

That's the engine we build. The call is 30 minutes on what it would look like for your specific market.

If you want a preview of how that engine looks before we talk, the prep page has the breakdown:
https://markiting.agency/booking-confirmed

Ellis
```

---

## Email 06 · Comparison (T + 60 hours)

**Purpose:** Pre-frame the "should I hire in-house" and "should I use a cheaper agency" objections. Address them directly so they're not the objection on the call.

**Subject:** Agency vs in-house vs us
**Preheader:** The honest version, not the marketing version.

```
{{first_name}},

You probably looked at three options to solve this. Worth being honest about each.

Hire in-house. Lowest risk. Highest cost over 12 months once you add salary, benefits, equipment, and the time it takes you personally to manage them. Best fit if you have $200K+ allocated to a marketing hire and a manager who can run them. Most local service businesses don't.

Hire a cheaper agency. Lowest cost. Highest risk. You get an account manager, the work happens at a contractor pool in another country, and the agency cycles you in and out as accounts churn. Sometimes works for a quarter. Rarely works for a year.

Hire us. Mid cost. We're in-house operators for hire. You get founders running strategy and creative, no contractor pool, and we turn down more accounts than we take. Best fit if you want a senior operator running the marketing without paying senior operator salary plus benefits plus the time to manage them.

We've lost deals to both options. Sometimes both are the right call. The 30 minutes on the call is where we find out which one fits your business.

Ellis
```

---

## Email 07 · Case study breakdown (T + 72 hours)

**Purpose:** Show the actual tactics behind a result, not just the outcome. Jeremy's principle: articulate the case study, don't just dump it.

**Subject:** How Pocket Dispo hit 21M views with one shoot
**Preheader:** The full breakdown, including what we'd do differently for a local business.

```
{{first_name}},

The Pocket Dispo number gets quoted on the site. Worth knowing how it actually happened so you can judge whether the same thinking applies to your business.

The setup. Pocket Dispo wanted a single piece of brand-deal content to push their product. Most agencies would have produced one polished spot. We produced one polished spot plus 14 cut-downs in different formats designed for different platforms and different hooks.

The shoot. One day of capture. Multiple angles, multiple wardrobes, multiple delivery variations of the core script. The setup looked expensive on the day. On the back end, every cut-down came from the same shoot, so the unit cost per piece of content dropped dramatically.

The release. We did not just upload and hope. We tested 4 hook variations as standalone shorts in the first 48 hours, watched the data, then weighted distribution toward the variation pulling the highest watch-time. The 21M views came from one variation that broke through. The other three did fine. One did exceptional.

How this maps to a local service business. You don't need 14 variations or 21M views. You need 4-6 variations of one shoot, each speaking to a different segment of your local market, each tested in your local feed for two weeks, then weighting paid spend toward the one that works. Same methodology, smaller scale, faster results.

That's the engine we build. The call is where we figure out what your version of this looks like.

Ellis
```

---

## Email 08 · Address fears (T - 48 hours before call)

**Purpose:** Final objection killer before the call. Acknowledge the fear, give the honest answer.

**Subject:** What if this doesn't work
**Preheader:** Straight answer.

```
{{first_name}},

48 hours out. The question that's probably loudest in your head right now is some version of "what if I sign up and it doesn't work."

Direct answer.

We do not promise specific lead numbers in writing because we cannot control your offer, your team, or your speed to follow up. What we promise is the work itself. If a deliverable is wrong, we redo it at our cost. If the campaign architecture is broken, we rebuild it at our cost. The work ships every week or we don't earn the fee.

The 90 day minimum exists so you get a fair read on what's possible. After that, you can leave on 30 days notice. There is no paperwork trap.

The honest thing is that even with the right work, some clients get a smaller lift than others. Usually because of follow-up speed, offer mismatch, or capacity limits on the back end. Stuff we can see on the call. That's why the call is a real call and not a high-pressure sales pitch.

If you want to read more on this before we talk, it's all on the prep page:
https://markiting.agency/booking-confirmed

Ellis
```

---

## Email 09 · Future pace (T - 24 hours before call)

**Purpose:** Help them visualize the 90-day outcome. Concrete, not hypey.

**Subject:** What the first 90 days actually looks like
**Preheader:** Specific week-by-week, not "results in 30 days."

```
{{first_name}},

Tomorrow at {{event_time}}. Here's the rough shape of what an engagement looks like if you decide to move forward, so you can show up to the call with the right questions.

Week 1-2. Audit and architect. We pull the existing account, creative library, analytics, and CRM. We map every step from first click to booked appointment and where leads currently leak. You get a written diagnostic.

Week 3-4. Shoot and build. One on-location shoot, in your venue, captures the raw material for the first 90 days of ad and content. CRM gets rebuilt or deployed (GHL by default) with intake, follow-up, and reputation flows wired in.

Week 5-8. Launch and watch. Ads go live with multiple creative variations. Weekly review of what's working. Kill what doesn't, double what does.

Week 9-13. Scale and tune. Best-performing creative gets refreshed. Audiences get expanded. New variations tested. Reporting dashboard gets handed over.

By the end of week 13 you've got a working marketing engine, a creative library, and clear data on what your cost per booked call or walk-in actually is.

Bring questions. See you tomorrow.

Ellis
```

---

## Email 10 · Sell the call (T - 12 hours before call)

**Purpose:** Maximize show rate by framing the call as a high-value session, not a sales call.

**Subject:** What we'll do on the call tomorrow
**Preheader:** And why most people walk away with something useful even if we don't work together.

```
{{first_name}},

Tomorrow at {{event_time}}. Final note on what to expect.

The first 10 minutes I ask questions. What you're trying to grow, what you've tried, what's working, what isn't. I'll have your website and ad account open while you talk.

The middle 10 minutes I give you my read. Specific, not generic. Where the leak is, what I'd test first, what's likely working in your favor that you're not pressing on, and what the biggest unforced error in your current marketing probably is.

The last 10 minutes is for your questions and for me to lay out what an engagement would look like if you wanted to move forward. If you don't, that's fine. You leave with a tighter read on your marketing than you came in with.

That's it. No deck, no pitch, no closing techniques. The reason this works is the call quality, not the call script.

Calendar invite is in your inbox. Reply if anything came up and you need to move it.

See you tomorrow.

Ellis
```

---

# Layer 3 · Selfie videos (record once, personalize per lead)

Two pre-recorded selfie videos that you record once on your phone, then send via text or email to specific leads when the timing fits. Jeremy's "secret weapon."

## Video 01 · "The Welcome" (send within 24h of booking, replaces or supplements Email 01)

**Length:** 45-60 seconds
**Where you record:** anywhere, just clean light and clear audio
**Script:**

```
Hey [name], Ellis here from Markit. Wanted to send a quick video so it doesn't feel like just another automated email landing in your inbox.

Thanks for booking. We're on for [day, time]. The call is 30 minutes, no deck, no pitch. First 10 minutes I ask questions, middle 10 minutes I give you my read on where the leaks are in your marketing, last 10 minutes is for your questions and what an engagement would look like if you wanted to move forward.

Before we talk, two things. One, there's a page I put together with answers to every question local service business owners ask before they hire us. Worth a five minute read so the call goes deep on you, not on our process. Two, if you've got read-only access to your ad account or analytics, throw the link in a reply and I'll have it open when we jump on.

That's it. Talk to you on [day].
```

## Video 02 · "The 24-hour" (send T-24h, supplements Email 02 or Workflow 2)

**Length:** 30-45 seconds
**Script:**

```
Hey [name], Ellis. 24 hours out. Quick note before tomorrow.

When you jump on, have your ad account or analytics ready, the URL of your current website handy, and one sentence in your head on the biggest constraint in your marketing right now. That's it for prep.

If you haven't had a chance to read the prep page yet, it's worth 5 minutes before the call. Link is in your inbox.

See you tomorrow at [time]. Looking forward.
```

---

# Layer 4 · Post-call follow-up

## Email 11 · The recap (T + 30 min after call, MANUAL)

**Why manual:** Signals you paid attention. Template lives in CRM but you fill in the placeholders yourself.

**Subject:** Recap and what's next
**Preheader:** Scope, math, and the path forward.

```
{{first_name}},

Good talking just now. Quick recap so we're aligned.

What you're trying to solve:
[insert 1-2 sentences from the call, paraphrased back to them]

Where we'd start in the first 30 days:
[insert 2-3 specific bullets based on what came up]

What we'd ship in the first 90 days:
[insert 2-3 specific bullets]

Investment: [insert range based on scope].

Scope and contract are attached. If it looks right, sign and we kick off within five business days. If you want anything adjusted, reply and we'll sort it.

Ellis
```

## Email 12 · Follow-up 1 (T + 24h after call, if no reply)

**Subject:** Anything I can clarify on the scope?
**Preheader:** Happy to jump back on for ten minutes if helpful.

```
{{first_name}},

Wanted to check in on the scope I sent yesterday.

If anything's unclear or you want to talk through a piece of it, reply here and I'll either answer in writing or hop on a quick ten minute call.

Ellis
```

## Email 13 · Follow-up 2 (T + 3 days after call, if no reply)

**Subject:** Quick story tied to what you said
**Preheader:** Same constraint, real example.

```
{{first_name}},

Thinking about what you said on the call about [specific thing they said].

We saw exactly the same pattern with [anonymous client or named one]. The fix in the first sprint was [specific solution]. Result was [specific number].

If that maps to your setup and you want to talk through it, reply and pick a time.

If not, no pressure. Decisions like this take a beat.

Ellis
```

## Email 14 · Final close (T + 7 days, if no reply)

**Subject:** Closing the loop
**Preheader:** Last note from me on this one.

```
{{first_name}},

Last email from me.

If now is the right time, the scope is still open and we can kick off this week. Reply and I'll send the link to sign.

If it's not, no problem. Door stays open. You have my email if anything changes.

Either way, I appreciated the call.

Ellis
```

---

# Layer 5 · The "red flags" follow-up (Jeremy Haynes, use sparingly)

When a lead has shown real interest and goes silent for 2+ weeks after the call. Surfaces the real objection.

**Channel:** Text from your phone (high signal that this isn't automated)
**Send time:** ~14 days of silence post-call

```
{{first_name}}, real talk. It scares me when potential clients aren't responsive to simple questions, comes off as a red flag.

Our best clients respond, are transparent with us, and get us what we need when we ask.

If we're going to do real numbers together I need you onboard fully. Lmk where you actually stand on this.
```

Use once per lead, then move on if no response.

---

# Sending cadence summary

For a typical 5-day gap between booking and call:

| When | Channel | Email # | Sender | Notes |
|---|---|---|---|---|
| T + 0 | Calendly automation | · | System | Native Calendly confirmation + calendar invite |
| T + 5 min | CRM email | 01 Welcome | Ellis | Calendly Workflow 1 also fires here, pick one |
| T + 60 min | iPhone text | · | Ellis | Manual SDR engagement bait |
| T + 3 h | CRM email | 02 FAQ attack | Ellis | |
| T + 24 h | CRM email | 03 Engagement bait | Ellis | |
| T + 24 h | iPhone selfie video | Video 01 | Ellis | Optional, high-leverage |
| T + 36 h | CRM email | 04 Why people don't show | Ellis | |
| T + 48 h | CRM email | 05 Real urgency | Ellis | |
| T + 60 h | CRM email | 06 Comparison | Ellis | |
| T + 72 h | CRM email | 07 Case study | Ellis | |
| T - 48 h | CRM email | 08 Address fears | Ellis | |
| T - 24 h | Calendly Workflow 2 | Prep email | Calendly | |
| T - 24 h | iPhone selfie video | Video 02 | Ellis | Optional, high-leverage |
| T - 24 h | CRM email | 09 Future pace | Ellis | |
| T - 12 h | CRM email | 10 Sell the call | Ellis | |
| T - 2 h | Calendly Workflow 3 | SMS reminder | Calendly | |
| T - 10 min | Calendly Workflow 4 | SMS reminder | Calendly | |
| Call happens | · | · | · | |
| T + 30 min | CRM email | 11 Recap | Ellis (manual) | |
| T + 24 h (no reply) | CRM email | 12 Follow-up 1 | Ellis | |
| T + 3 d (no reply) | CRM email | 13 Follow-up 2 | Ellis | |
| T + 7 d (no reply) | CRM email | 14 Final close | Ellis | |
| T + 14 d silence | iPhone text | Red flags follow-up | Ellis (manual) | |

For shorter lead times (call booked within 24-48 hours), compress and drop emails 5, 6, 7 · keep welcome, FAQ, engagement bait, address fears, future pace, sell-the-call.

---

# Setup checklist

- [ ] Mailboxes live: `ellis@markiting.agency` and `shema@markiting.agency`
- [ ] SPF, DKIM, DMARC records at Network Solutions
- [ ] Calendly verified for `markiting.agency` domain
- [ ] Calendly Workflows 1-7 created (see [CALENDLY_WORKFLOWS.md](./CALENDLY_WORKFLOWS.md))
- [ ] CRM connected to Calendly webhook (`Invitee Created`)
- [ ] 10 CRM emails (01-10) loaded as a sequence on the `Invitee Created` trigger
- [ ] Post-call emails (11-14) loaded as a separate sequence triggered by "call completed" status in CRM, with reply-detection conditions
- [ ] Zapier or n8n workflow: Calendly booking → iMessage to Ellis's phone with lead name + number (so he can send the manual SDR text inside 60 min)
- [ ] Record selfie Video 01 (Welcome) and Video 02 (24-hour) once, save as Loom or to phone
- [ ] Dry run the full sequence using a personal email + phone before going live
- [ ] Mark a test booking as no-show to verify the recovery flow

Once all checked, the sequence is launch-ready.
