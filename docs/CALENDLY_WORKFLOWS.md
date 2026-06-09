# Markit · Calendly Workflows (Neo / Jeremy Haynes standard)

The automation layer that backs up your manual outreach and your CRM sequence. Calendly handles the high-frequency reminder cadence (24h email, 2h SMS, 10min SMS) and the no-show recovery flow. Everything between booking and call body content lives in the CRM sequence at [POST_BOOKING_EMAIL_FLOW.md](./POST_BOOKING_EMAIL_FLOW.md).

Principle from Jeremy Haynes: **automated reminders alone get you a 40-50% show rate. Pair them with manual outreach inside the first hour after booking and you push to 65-80%.** This doc covers the automation. The manual layer lives in the CRM doc.

---

## Before you start

| Item | Value |
|---|---|
| **Calendly event** | Markit Service Enquiry |
| **Event URL** | https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry |
| **Confirmation redirect** | https://markiting.agency/booking-confirmed (with Pass event details ticked) |
| **Plan needed** | Standard or higher (Workflows + SMS) |
| **Sender** | Ellis Deakin · ellis@markiting.agency |
| **SMS sender** | Configure Calendly SMS in Account → Notifications → SMS Workflows |

### Pre-launch (do once)

- [ ] Verify `markiting.agency` in Calendly → Admin → **Domain Control** so emails send from `ellis@markiting.agency`, not `notifications@calendly.com`
- [ ] Add SPF, DKIM, DMARC records at Network Solutions for `markiting.agency`
- [ ] Enable SMS in your Calendly plan (Standard+) and verify your business SMS sender
- [ ] Set up `ellis@markiting.agency` and `shema@markiting.agency` mailboxes
- [ ] Confirm `Pass event details to your redirected page` is ticked in the event's Confirmation Page settings (so the booking-confirmed page can personalise name + time)

---

## Calendly merge tags

| Tag | What it inserts |
|---|---|
| `{{invitee_first_name}}` | First name |
| `{{invitee_full_name}}` | Full name |
| `{{event_name}}` | "Markit Service Enquiry" |
| `{{event_date_time}}` | "Wednesday, June 3, 2026 at 11:00 AM" |
| `{{event_date}}` | "Wednesday, June 3, 2026" |
| `{{event_time}}` | "11:00 AM" |
| `{{location_information}}` | Zoom / Google Meet link |
| `{{cancel_url}}` | Cancel link |
| `{{reschedule_url}}` | Reschedule link |
| `{{host_name}}` | Host (Ellis or Shema) |

Use Calendly's `+` button to insert these · pasting as text won't auto-resolve.

---

# The 7 Workflows

| # | Workflow | Channel | Trigger | Purpose |
|---|---|---|---|---|
| 1 | Welcome email | Email | When invitee schedules | Set tone, link confirmation page, ask one engagement-bait question |
| 2 | T-24h prep email | Email | Before event (24h) | Push them to the FAQ page and bring 3 things to the call |
| 3 | T-2h SMS reminder | SMS | Before event (2h) | High-visibility text reminder, not email |
| 4 | T-10min SMS reminder | SMS | Before event (10m) | "I'm jumping on now" energy |
| 5 | No-show recovery email | Email | When marked no-show | Soft re-engage with reschedule link |
| 6 | No-show SMS attempt | SMS | When marked no-show | Backup channel, often outperforms email |
| 7 | Final no-show email | Email | 3d after no-show | Close the loop politely |

---

## Workflow 1 · Welcome email (T + 0)

**Why:** Tone-setter. The confirmation page is doing the heavy lifting on objections (see [booking-confirmed/page.tsx](../app/booking-confirmed/page.tsx)). This email points them back at it, sets the call format expectation, and asks one small engagement-bait question to get a reply on the thread.

### Setup
1. Workflows → New
2. **Name:** `01 · Welcome email`
3. **Apply to:** Markit Service Enquiry
4. **Trigger:** `When invitee schedules an event`
5. **Action:** Send email to invitee · `Immediately`

### Subject
```
Locked in for {{event_date}}
```

### Preheader (Calendly preview text)
```
The page everyone reads before our call, plus one quick ask.
```

### Body
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

Ellis Deakin
Co-Founder, Markit
markiting.agency
```

---

## Workflow 2 · Pre-call prep email (T - 24h)

**Why:** The 24-hour mark is when people start triaging their week ahead. A clear, low-friction "here's what to bring" hits at the right moment, and the link back to the confirmation page catches anyone who didn't open the welcome.

### Setup
1. Workflows → New
2. **Name:** `02 · T-24h prep email`
3. **Trigger:** `Before event starts` · `24 hours` before
4. **Action:** Send email to invitee

### Subject
```
Tomorrow at {{event_time}} · three things to bring
```

### Preheader
```
And a link to the prep page if you haven't read it yet.
```

### Body
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

Ellis Deakin
Co-Founder, Markit
markiting.agency
```

---

## Workflow 3 · T-2h SMS reminder

**Why:** SMS open rate beats email by an order of magnitude inside the same day. Two hours out is when most no-shows fall off, so this is the highest-leverage reminder of the sequence. Keep it short. SMS is not an email.

### Setup
1. Workflows → New
2. **Name:** `03 · T-2h SMS reminder`
3. **Trigger:** `Before event starts` · `2 hours` before
4. **Action:** Send text message to invitee

### Body (under 160 characters)
```
{{invitee_first_name}}, Ellis at Markit. We're on at {{event_time}}. Meeting link in your calendar invite. Reply here if anything changes.
```

---

## Workflow 4 · T-10min SMS reminder

**Why:** Final nudge. Mimics what a friend would text. Catches the person who got pulled into a meeting or forgot to open the calendar. Pushes show rate the last few percent.

### Setup
1. Workflows → New
2. **Name:** `04 · T-10min SMS reminder`
3. **Trigger:** `Before event starts` · `10 minutes` before
4. **Action:** Send text message to invitee

### Body
```
{{invitee_first_name}} jumping on the call now. Meeting link is in your calendar invite. See you in there.
```

---

## Workflow 5 · No-show recovery email (T + immediate after marked NS)

**Why:** A no-show is not the end of the lead. Jeremy's data shows roughly 30-40% of no-shows reschedule when contacted inside 24 hours with a non-judgmental tone and a clear path back. Mark the no-show inside Calendly within 2 hours so this workflow fires.

### Setup
1. Workflows → New
2. **Name:** `05 · No-show recovery email`
3. **Trigger:** `When invitee is marked as a no-show`
4. **Action:** Send email to invitee · `Immediately`

### Subject
```
Missed you at {{event_time}}
```

### Preheader
```
Reschedule link below if you still want to talk.
```

### Body
```
{{invitee_first_name}},

We had {{event_time}} on the calendar and I didn't see you on the link. Things come up. No judgement.

If you still want to talk, pick a new time here:
https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry

And if something changed and now isn't the right moment, hit reply and let me know. I'd rather close the file than chase a lead that isn't there.

Ellis

Ellis Deakin
Co-Founder, Markit
markiting.agency
```

---

## Workflow 6 · No-show SMS

**Why:** SMS recovers a meaningful chunk of no-shows that emails don't, because the email got buried in their inbox during whatever crisis took them off the call. Sent right after the email so they hit the inbox within minutes of each other.

### Setup
1. Workflows → New
2. **Name:** `06 · No-show SMS`
3. **Trigger:** `When invitee is marked as a no-show`
4. **Action:** Send text message to invitee · `Immediately`

### Body
```
{{invitee_first_name}}, Ellis at Markit. We had {{event_time}} on the calendar today. If you still want to talk, reschedule here: https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry
```

---

## Workflow 7 · Final no-show email (T + 3 days)

**Why:** Clean close so they know the door is open without you chasing forever. Honest, low-pressure, and points to the same reschedule link. Run before sending a manual follow-up so the automation does the easy part first.

### Setup
1. Workflows → New
2. **Name:** `07 · Final no-show email (T+3d)`
3. **Trigger:** `When invitee is marked as a no-show`
4. **Send time:** `3 days` after no-show is marked
5. **Action:** Send email to invitee

### Subject
```
Closing the file
```

### Preheader
```
Last note from me on this one.
```

### Body
```
{{invitee_first_name}},

Last note from me on this one.

If the timing is wrong, no problem. The door stays open and you have my email if anything changes.

If a call is still on your list, here is the link one more time:
https://calendly.com/d/cyvj-yx9-mz5/markit-service-enquiry

Either way, appreciated you booking in.

Ellis

Ellis Deakin
Co-Founder, Markit
markiting.agency
```

---

# What Calendly cannot do (handled in CRM)

Calendly Workflows can't:
- Send the high-frequency value-dense sequence between Workflow 1 and Workflow 2 (the 8 emails covering FAQs, engagement bait, urgency, comparison, fears, case studies, future pace, sell-the-call)
- Trigger on "did they reply" or "did they consume the confirmation page"
- Send manual selfie videos from your phone

Those live in the CRM at [POST_BOOKING_EMAIL_FLOW.md](./POST_BOOKING_EMAIL_FLOW.md), which also covers:
- The manual SDR text Ellis sends within 1 hour of booking (the 30% show-rate multiplier)
- The 3 selfie video scripts to record once and personalize per lead
- The 4-email post-call follow-up
- The "red flags" follow-up template for ghosters

---

# Pre-launch dry run

- [ ] Book a fake call using a personal email (and phone for SMS)
- [ ] Confirm Workflow 1 fires inside 5 minutes
- [ ] Confirm Workflow 2 fires at T-24h
- [ ] Confirm Workflows 3 and 4 fire at T-2h and T-10min
- [ ] Mark the test booking as a no-show after the slot passes
- [ ] Confirm Workflows 5, 6, and 7 fire on the no-show trigger
- [ ] Check every link in every email opens correctly (especially the booking-confirmed redirect)
- [ ] Check SMS sender name shows correctly on iPhone and Android
- [ ] Confirm Calendly emails arrive from `ellis@markiting.agency`, not `notifications@calendly.com`
