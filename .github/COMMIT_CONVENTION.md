# EdukasyonPH Conventional Commit Message

Documentation of proper commit message following standards of the company.

# Commit Message Format
All Commit Messages **must** meet the company standards:

```
<type>(<scope?>): <subject> <JIRA ticket?> <github pr #?> 
```


# Types

| Type          | Description |
|:-------------:|-------------|
| `new`         | for new feature implementing commit|
| `feature`     | for new feature implementing commit (equal `new`) |
| `fix`         | for bug fix commit |
| `security`    | for security issue fix commit |
| `performance` | for performance issue fix commit |
| `improvement` | for backwards-compatible enhancement commit |
| `breaking`    | for backwards-incompatible enhancement commit |
| `deprecated`  | for deprecated feature commit |
| `refactor`    | for refactoring commit |
| `docs`        | for documentation commit |
| `test`        | for testing commit |
| `dependency`  | for dependencies upgrading or downgrading commit |
| `config`      | for configuration commit |
| `build`       | for packaging or bundling commit |
| `release`     | for publishing commit |
| `wip`         | for work in progress commit |
| `stop`        | end doing something e.g. removing a feature |
| `ci`          | for command line changes like git, npm |
| `revert`      | revert from the previous commit |
| `style`       | for commits that do not affect the meaning of the code like white spaces and missing semi colons |



# Scope
The scope could be anything specifying place or category of the commit change. For example school, internships, core, modal, button, etc.


# Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

# Commit Message Examples
## Basic Commit Messages
```
fix(search): fix search sort by date

// Some commits doesn't have scope
build: generate latest bundle
```
## PR title 
```
docs(server): add javadoc comments on methods DOCS-413 

// Some PRs might not have JIRA ticket
perf(animation): reduce memory consumption by using speedanimate.js 
```
## Commit title before confirming PR merge
```
feat(modal): create modal component WEBAPP-425 (#4)
```