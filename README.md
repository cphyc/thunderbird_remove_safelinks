# Thunderbird remove safelinks

When using Outlook as your mail provider, it mingles the links found in the email with a feature named "safelinks".
I don't like it at all, because I think it prevents you from assessing whether the email points to a safe destination or not.

It is unfortunately impossible to deactivate the safelink feature (except for personal accounts I guess?), and this is where this extension comes in play.
It replaces all occurrences of safelinks from emails displayed in Thunderbird, and replaces them by their original value.

![Mail view with and without the extension.](/demonstration.png?raw=true "Mail view with and without the extension.")

# Installation

Head to https://addons.thunderbird.net/en-GB/thunderbird/addon/safelink-removal/ and install the extension.

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
You can then install the extension by loading it directly in Thunderbird using the generated `.zip` file located in `thunderbird_remove_safelinks/web-ext-artifacts/`.
Note that if you install this way, you need to manually update the repository, rebuild the extension and reload it in Thunderbird in order to update it.
