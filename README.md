# Binadox infrastructure as code analyzer Github Action

---

This GitHub Action intiates Binadox analysis process for your preconfigured code

Create a new file in `.github/workflows/biandox.yml` in your repo with the following content.
```yaml
on: [push]

jobs:
  binadox_job:
    runs-on: ubuntu-latest
    name: Binadox Structure-As-Code Analyzer
    steps:
      - name: binadox
        uses: binadox-public/binadox-infrastructure-as-code-analyzer@v1.1
        with:
          binadox-secret-token: '${{ secrets.BINADOX_TOKEN }}'
          binadox-server-url: 'https://app.binadox.com/iaas-analyze'
          binadox-project-name: 'my project'
      - name: Get the status
        run: echo "Status ${{ steps.binadox.outputs.status }}"

```


