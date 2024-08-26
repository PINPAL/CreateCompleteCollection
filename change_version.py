import os

# Get the current script path
script_path = os.path.realpath(__file__)

# Get the number of commits total in the repository
commits = int(os.popen("git rev-list --count HEAD").read().strip())
new_version = f"1.{commits + 1}"

# Function to find and replace the version number in a config file
def replace_version(config_path, new_version, line_heading):
    config_path = os.path.join(os.path.dirname(script_path), config_path)
    with open(config_path, "r") as f:
        config = f.read()
        for line in config.split("\n"):
            # print(line)
            # find the line that contains the version number
            if line_heading in line:
                new_line = f'{line_heading}{new_version}'
                config = config.replace(line, new_line)
                print(f"Updated version number in {config_path} to \n{new_line}")
                return
                
        print("Failed to find version number in config file")

replace_version("config/bcc-common.toml", new_version, "modpackVersion = ")
replace_version("config/fancymenu/customization/create-mod.txt", new_version, "source = Create Complete Collection (LEGACY): v")