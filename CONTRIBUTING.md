# Contributing to Mytril

Thank you for taking the time to contribute to **Mytril**!  
We appreciate all contributions, whether you're fixing bugs, adding features, improving documentation, or testing. This guide will walk you through the key steps to efficiently and collaboratively contribute to the project.

Together, we can make **Mytril**, part of the **Minedelve** organization, even better!

---

## How to Contribute?

- [Contributing to Mytril](#contributing-to-mytril)
  - [How to Contribute?](#how-to-contribute)
  - [Report a Bug](#report-a-bug)
    - [Steps to Report a Bug:](#steps-to-report-a-bug)
  - [Propose a Feature](#propose-a-feature)
    - [Steps to Propose a Feature:](#steps-to-propose-a-feature)
  - [Improve the Documentation](#improve-the-documentation)
    - [You can help by:](#you-can-help-by)
  - [Submit a Pull Request](#submit-a-pull-request)
    - [Before You Start:](#before-you-start)
    - [Steps to Submit a PR:](#steps-to-submit-a-pr)
    - [Commit Message Guidelines](#commit-message-guidelines)
    - [Use readable and meaningful commit messages to describe your changes.](#use-readable-and-meaningful-commit-messages-to-describe-your-changes)
    - [Code of Conduct](#code-of-conduct)
  - [Need Help?](#need-help)

---

## Report a Bug

Found a bug? We're sorry you've run into a problem, and we'd love to fix it as soon as possible! Here's how you can report it.

### Steps to Report a Bug:

1. Go to the **[Issues](https://github.com/minedelve/mytril/issues)** tab.
2. Click on `New Issue`.
3. Fill out the template with the following:
   - **Title**: A brief, clear summary of the issue.
   - **Description**: A detailed explanation of what's happening, including any error messages or screenshots.
   - **Steps to Reproduce**: Provide a step-by-step guide on how we can recreate the issue.
   - **Expected Behavior**: Describe what should happen instead.
   - **Environment Details** (if relevant):
     - Operating system
     - Node.js version
     - Mytril version

The more details you provide, the easier it will be for us to identify and fix the issue. 🚀

---

## Propose a Feature

Got a cool idea for a new feature or improvement? Great! Let's discuss it first to ensure it aligns with the project's goals.

### Steps to Propose a Feature:

1. Open a **[Discussion](https://github.com/minedelve/mytril/discussions)** or issue in the **Feature Request** category.
2. Include:
   - **Problem**: What problem does your feature solve?
   - **Solution**: Describe your proposed solution. If possible, provide code examples or use case scenarios.
   - **Alternatives**: Mention any alternative approaches you've considered.

This process ensures we stay aligned and build features that benefit all users.

---

## Improve the Documentation

We welcome improvements to the documentation! Clear and thorough guides help both users and contributors understand the project better.

### You can help by:

- Fixing typos or grammar issues.
- Adding usage examples or FAQs.
- Enhancing technical explanations.
- Creating guides for specific use cases.

Feel free to submit a pull request with your documentation updates (see the [Pull Request guide](#submit-a-pull-request) below).

---

## Submit a Pull Request

Found an issue you'd like to fix or a feature you want to implement? Follow these steps to help us process your contribution smoothly.

### Before You Start:

1. **Fork the Repository**: Create your fork from [minedelve/mytril](https://github.com/minedelve/mytril).
2. **Create a Branch**: Create a new branch for your work:
   ```bash
   git checkout -b feature/my-new-feature
   Use descriptive branch names like:
        fix/bug-description
        feature/add-new-command
   ```
3. **Check [open issue](https://github.com/minedelve/mytril/issues)**s to avoid redundant work. Better yet, comment on the issue you'd like to work on.
4. **Install dependencies** and run tests locally to ensure everything is set up correctly:
   ```bash
   npm install
   npm test
   ```

---

### Steps to Submit a PR:

1. Write clean and readable code:

- Follow the coding style already present in the project.
- Add comments where necessary for clarity.

2. Add or update tests:

- Make sure your changes are covered by tests.
- Run `npm test` to verify everything works.

3. Push your changes to your fork:

```bash
git add .
git commit -m "feat: Add awesome new feature"
git push origin feature/my-new-feature
```

4. Open a **Pull Request**:

- Go to the [Pull Requests tab](https://github.com/minedelve/mytril/pulls).
- Click **New Pull Request**.
- Provide a clear description of what your PR does and reference any related issues (e.g., "Fixes #123").
  Every PR will be reviewed by maintainers. Please address any feedback as needed—it’s all part of ensuring high-quality contributions!

### Commit Message Guidelines

To keep the project history clean and readable, we follow the Conventional Commits format. Here are some examples:

```bash
fix: Resolve issue with command execution
feat: Add support for a new "analyze" command
docs: Update README with usage examples
test: Add tests for the new feature X
refactor: Simplify error handling in module Y
```

### Use readable and meaningful commit messages to describe your changes.

Syncing Your Fork
If you’ve forked the repository, make sure your branch stays up-to-date with the upstream repository to avoid conflicts.

```bash
git remote add upstream https://github.com/minedelve/mytril.git
git fetch upstream
git merge upstream/main
```

### Code of Conduct

Be respectful, collaborative, and inclusive. Our team values contributors from all backgrounds and expertise levels. Please adhere to our [Code of Conduct](https://github.com/minedelve/mytril/blob/svelte-5/CODE_OF_CONDUCT.md).

## Need Help?

If you're unsure about anything or have questions:

Check the existing [Issues](https://github.com/minedelve/mytril/issues) or [Discussions](https://github.com/minedelve/mytril/discussions).
Ask us directly by opening a new discussion or issue.
Contact us on <your preferred contact method, e.g., email/community channel>.
Thank you for contributing to **Mytril!** We're excited to have you on board. 🚀
