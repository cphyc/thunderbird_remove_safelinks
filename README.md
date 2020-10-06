# Thunderbird remove safelinks

When using Outlook as your mail provider, it mingles the links found in the email with a feature named "safelinks".
I personally don't like it at all, because it prevents you from assessing whether the email points to a safe destination or not.

It is unfortunately impossible to deactive the safelink feature (except for personal account I guess?), and this is where this extension comes in play.
It replaces all occurrences of safelinks from thunderbirds emails, and replaces them by their original value.

# Building

In order to build this extension on Linux/MacOSX, execute these lines
```bash
# Clone the repository
git clone https://github.com/cphyc/thunderbird_remove_safelinks.git
# Move into the newly-created folder
cd thunderbird_remove_safelinks
# Pack everything using web-ext. The packed extension file is then located in web-ext-artifacts
web-ext-build
```