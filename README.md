# Thunderbird remove safelinks

When using Outlook as your mail provider, it mingles the links found in the email with a feature named "safelinks".
I don't like it at all, because I think it prevents you from assessing whether the email points to a safe destination or not.

It is unfortunately impossible to deactivate the safelink feature (except for personal accounts I guess?), and this is where this extension comes in play.
It replaces all occurrences of safelinks from emails displayed in Thunderbird, and replaces them by their original value.

![Mail view with and without the extension.](/demonstration.png?raw=true "Mail view with and without the extension.")

# Building

In order to build this extension on Linux/MacOSX, execute these lines
```bash
# Clone the repository
git clone https://github.com/cphyc/thunderbird_remove_safelinks.git
# Move into the newly-created folder
cd thunderbird_remove_safelinks
# We use node + npm to build the project
npm install    # install the required files
npm run build  # create the bundled extension, located in web-ext-artifacts/
```
