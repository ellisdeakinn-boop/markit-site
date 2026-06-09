# Markit · All Booking Emails (Copy-Paste Ready)

Every email and SMS, in send order. Strategy and setup notes live in [CALENDLY_WORKFLOWS.md](./CALENDLY_WORKFLOWS.md) and [POST_BOOKING_EMAIL_FLOW.md](./POST_BOOKING_EMAIL_FLOW.md). This doc is just the copy.

**Sign every email with:**

```
Ellis Deakin
Co-Founder, Markit
markiting.agency
```

---

# Calendly Workflow emails

## 1. Welcome (fires immediately on booking)

**Subject:** Locked in for {{event_date}}

```
{{invitee_first_name}},

You're booked for {{event_date_time}}. Looking forward.

Quick orientation before we talk.

I put together a page with answers to the questions every local service business owner asks before working with us. Pricing, contract length, what kind of clients do well, what kind don't, the works. Worth a five minute read so the call itself goes deep on you, not on our process:

https://markiting.agency/booking-confirmed

The call is 30 minutes. First 10 on what you're trying to grow. Next 10 on what's currently in the way. Last 10 on what we'd do in the first 30 days. No deck. No pitch.

One thing that helps me come prepared.

Reply to this email with one sentence on the number you actually care about in the next 90 days. Booked calls per month, walk-ins per week, monthly revenue, whatever it is. One sentence is enough.

Talk soon,
Ellis
```

## 2. T-24h prep (24 hours before call)

**Subject:** Tomorrow at {{event_time}}, three things to bring

```
{{invitee_first_name}},

We're on tomorrow at {{event_time}}. Three things that make the call useful from the first minute:

1. Read-only access to your ad account or analytics. Even if it's a mess, especially if it's a mess. We can read it on the call.

2. The URL of your current website. We'll have it open.

3. One sentence on the biggest constraint right now. More leads, better leads, conversion drop, team capacity, anything.

If you haven't read the prep page yet, do it before we talk. It answers most of the price, contract, and process questions so the call can go deep on your business:

https://markiting.agency/booking-confirmed

Need to move the time? Reschedule link is in your calendar invite, or use this:
{{reschedule_url}}

See you tomorrow,
Ellis
```

## 3. T-2h SMS (160 chars max)

```
{{invitee_first_name}}, Ellis at Markit. We're on at {{event_time}}. Meeting link in your calendar invite. Reply here if anything changes.
```

## 4. T-10min SMS

```
{{invitee_first_name}} jumping on the call now. Meeting link is in your calendar invite. See you in there.
```

## 5. No-show recovery email (fires when marked no-show)

**Subject:** Missed you at {{event_time}}

```
{{invitee_first_name}},

We had {{event_time}} on the calendar and I didn't see you on the link. Things come up. No judgement.

If you still want to talk, pick a new time here:
https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry

And if something changed and now isn't the right moment, hit reply and let me know. I'd rather close the file than chase a lead that isn't there.

Ellis
```

## 6. No-show SMS

```
{{invitee_first_name}}, Ellis at Markit. We had {{event_time}} on the calendar today. If you still want to talk, reschedule here: https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry
```

## 7. Final no-show email (T+3 days after marked no-show)

**Subject:** Closing the file

```
{{invitee_first_name}},

Last note from me on this one.

If the timing is wrong, no problem. The door stays open and you have my email if anything changes.

If a call is still on your list, here is the link one more time:
https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry

Either way, appreciated you booking in.

Ellis
```

---

# CRM pre-call sequence (load on Calendly webhook)

## CRM 01. Welcome resend (T + 5 min)

*Same as Calendly Workflow 1. Pick which tool sends it, don't send twice.*

## CRM 02. FAQ attack (T + 3 hours)

**Subject:** Three things people ask before they hire us

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

## CRM 03. Engagement bait (T + 24 hours)

**Subject:** Quick ask before our call

```
{{first_name}},

Before our call I want to send you something useful that matches where you said you're at.

Two options:

A. The breakdown of how Pocket Dispo went from a single brand-deal shoot to 21M views in 30 days, plus what we'd do differently for a local service business than a consumer product brand.

B. A 6-minute Loom of me walking through what the first 30 days of a Markit engagement actually looks like, end to end, for a local service business.

Reply with A or B and I'll send it across. You can have both if you want, but pick one to start.

Ellis
```

## CRM 04. Why people don't show (T + 36 hours)

**Subject:** The four reasons people cancel on us

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

## CRM 05. Real urgency (T + 48 hours)

> The stat numbers below are placeholders. Swap them for real ones from your own ad accounts or known industry sources before sending. Do not quote numbers you cannot back up.

**Subject:** Why local service ad costs are up 30% this year

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

## CRM 06. Comparison (T + 60 hours)

**Subject:** Agency vs in-house vs us

```
{{first_name}},

You probably looked at three options to solve this. Worth being honest about each.

Hire in-house. Lowest risk. Highest cost over 12 months once you add salary, benefits, equipment, and the time it takes you personally to manage them. Best fit if you have $200K+ allocated to a marketing hire and a manager who can run them. Most local service businesses don't.

Hire a cheaper agency. Lowest cost. Highest risk. You get an account manager, the work happens at a contractor pool in another country, and the agency cycles you in and out as accounts churn. Sometimes works for a quarter. Rarely works for a year.

Hire us. Mid cost. We're in-house operators for hire. You get founders running strategy and creative, no contractor pool, and we turn down more accounts than we take. Best fit if you want a senior operator running the marketing without paying senior operator salary plus benefits plus the time to manage them.

We've lost deals to both options. Sometimes both are the right call. The 30 minutes on the call is where we find out which one fits your business.

Ellis
```

## CRM 07. Case study breakdown (T + 72 hours)

**Subject:** How Pocket Dispo hit 21M views with one shoot

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

## CRM 08. Address fears (T - 48 hours before call)

**Subject:** What if this doesn't work

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

## CRM 09. Future pace (T - 24 hours before call)

**Subject:** What the first 90 days actually looks like

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

## CRM 10. Sell the call (T - 12 hours before call)

**Subject:** What we'll do on the call tomorrow

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

# Post-call sequence

## Post-call 01. Recap (T + 30 min after call, SEND MANUALLY)

**Subject:** Recap and what's next

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

## Post-call 02. Follow-up 1 (T + 24h after call, if no reply)

**Subject:** Anything I can clarify on the scope?

```
{{first_name}},

Wanted to check in on the scope I sent yesterday.

If anything's unclear or you want to talk through a piece of it, reply here and I'll either answer in writing or hop on a quick ten minute call.

Ellis
```

## Post-call 03. Follow-up 2 (T + 3 days after call, if no reply)

**Subject:** Quick story tied to what you said

```
{{first_name}},

Thinking about what you said on the call about [specific thing they said].

We saw exactly the same pattern with [anonymous client or named one]. The fix in the first sprint was [specific solution]. Result was [specific number].

If that maps to your setup and you want to talk through it, reply and pick a time.

If not, no pressure. Decisions like this take a beat.

Ellis
```

## Post-call 04. Final close (T + 7 days, if no reply)

**Subject:** Closing the loop

```
{{first_name}},

Last email from me.

If now is the right time, the scope is still open and we can kick off this week. Reply and I'll send the link to sign.

If it's not, no problem. Door stays open. You have my email if anything changes.

Either way, I appreciated the call.

Ellis
```

---

# Manual touches (sent from Ellis's phone)

## SDR Text (within 60 min of booking)

```
Hey {{first_name}}, Ellis from Markit here. Got your booking for {{event_day}}.

Two things I can send you that match where you said you're at. A 6-minute Loom of how we'd structure the first 30 days for a local service business like yours, OR a written breakdown of the Pocket Dispo campaign we shot that pulled 21M views (and how we'd apply that thinking to your category).

Which would be more useful, and want it here as a text or email?
```

## Red flags follow-up (T + 14 days silence after call)

```
{{first_name}}, real talk. It scares me when potential clients aren't responsive to simple questions, comes off as a red flag.

Our best clients respond, are transparent with us, and get us what we need when we ask.

If we're going to do real numbers together I need you onboard fully. Lmk where you actually stand on this.
```

---

## Selfie video scripts

### Video 01. Welcome (send within 24h, 45-60 sec)

```
Hey [name], Ellis here from Markit. Wanted to send a quick video so it doesn't feel like just another automated email landing in your inbox.

Thanks for booking. We're on for [day, time]. The call is 30 minutes, no deck, no pitch. First 10 minutes I ask questions, middle 10 minutes I give you my read on where the leaks are in your marketing, last 10 minutes is for your questions and what an engagement would look like if you wanted to move forward.

Before we talk, two things. One, there's a page I put together with answers to every question local service business owners ask before they hire us. Worth a five minute read so the call goes deep on you, not on our process. Two, if you've got read-only access to your ad account or analytics, throw the link in a reply and I'll have it open when we jump on.

That's it. Talk to you on [day].
```

### Video 02. T-24h (30-45 sec)

```
Hey [name], Ellis. 24 hours out. Quick note before tomorrow.

When you jump on, have your ad account or analytics ready, the URL of your current website handy, and one sentence in your head on the biggest constraint in your marketing right now. That's it for prep.

If you haven't had a chance to read the prep page yet, it's worth 5 minutes before the call. Link is in your inbox.

See you tomorrow at [time]. Looking forward.
```
