import json
import yaml

# Load architecture.json
with open('architecture.json', 'r') as f:
    architecture = json.load(f)

# Load .pddrc
with open('.pddrc', 'r') as f:
    pddrc = yaml.safe_load(f)

print("=" * 80)
print("VERIFICATION: .pddrc Configuration Mapping")
print("=" * 80)
print()

errors = []
warnings = []

for module in architecture:
    filename = module['filename']
    filepath = module['filepath']
    
    # Extract basename (remove _Language.prompt suffix)
    basename = filename.replace('_TypeScript.prompt', '').replace('_TypeScriptReact.prompt', '').replace('_HTML.prompt', '').replace('.prompt', '')
    
    print(f"Module: {filename}")
    print(f"  Expected basename: {basename}")
    print(f"  Expected filepath: {filepath}")
    
    # Check if context exists
    if basename in pddrc['contexts']:
        context = pddrc['contexts'][basename]
        actual_path = context['defaults']['outputs']['code']['path']
        paths_pattern = context['paths']
        
        print(f"  ✓ Context found: {basename}")
        print(f"  ✓ paths pattern: {paths_pattern}")
        print(f"  Configured path: {actual_path}")
        
        # Verify filepath matches
        if actual_path == filepath:
            print(f"  ✓ Path matches!")
        else:
            error_msg = f"  ✗ Path MISMATCH: expected '{filepath}', got '{actual_path}'"
            print(error_msg)
            errors.append(error_msg)
    else:
        error_msg = f"  ✗ Context NOT FOUND in .pddrc"
        print(error_msg)
        errors.append(error_msg)
    
    print()

# Check for prompts_dir placement
print("=" * 80)
print("CHECKING prompts_dir CONFIGURATION")
print("=" * 80)
print()

prompts_dir_count = 0
for context_name, context_data in pddrc['contexts'].items():
    if 'prompts_dir' in context_data.get('defaults', {}):
        prompts_dir_count += 1
        if context_name == 'default':
            print(f"✓ prompts_dir correctly placed in 'default' context")
        else:
            warning_msg = f"⚠ WARNING: prompts_dir found in '{context_name}' context (should only be in 'default')"
            print(warning_msg)
            warnings.append(warning_msg)

if prompts_dir_count == 0:
    error_msg = "✗ ERROR: prompts_dir not found in any context"
    print(error_msg)
    errors.append(error_msg)

print()
print("=" * 80)
print("VERIFICATION SUMMARY")
print("=" * 80)
print(f"Total modules: {len(architecture)}")
print(f"Errors: {len(errors)}")
print(f"Warnings: {len(warnings)}")

if errors:
    print("\nERRORS:")
    for error in errors:
        print(f"  {error}")

if warnings:
    print("\nWARNINGS:")
    for warning in warnings:
        print(f"  {warning}")

if not errors and not warnings:
    print("\n✓ ALL CHECKS PASSED!")
    print("\nThe .pddrc configuration is correct and ready to use.")
else:
    exit(1)

