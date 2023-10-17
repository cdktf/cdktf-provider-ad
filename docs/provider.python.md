# `provider`

Refer to the Terraform Registory for docs: [`ad`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdProvider <a name="AdProvider" id="@cdktf/provider-ad.provider.AdProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs ad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.provider.AdProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_ad import provider

provider.AdProvider(
  scope: Construct,
  id: str,
  winrm_hostname: str,
  winrm_password: str,
  winrm_username: str,
  alias: str = None,
  domain_controller: str = None,
  krb_conf: str = None,
  krb_keytab: str = None,
  krb_realm: str = None,
  krb_spn: str = None,
  winrm_insecure: typing.Union[bool, IResolvable] = None,
  winrm_pass_credentials: typing.Union[bool, IResolvable] = None,
  winrm_port: typing.Union[int, float] = None,
  winrm_proto: str = None,
  winrm_use_ntlm: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmHostname">winrm_hostname</a></code> | <code>str</code> | The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPassword">winrm_password</a></code> | <code>str</code> | The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmUsername">winrm_username</a></code> | <code>str</code> | The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.domainController">domain_controller</a></code> | <code>str</code> | Use a specific domain controller. (default: none, environment variable: AD_DC). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbConf">krb_conf</a></code> | <code>str</code> | Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbKeytab">krb_keytab</a></code> | <code>str</code> | Path to a keytab file to be used instead of a password. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbRealm">krb_realm</a></code> | <code>str</code> | The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbSpn">krb_spn</a></code> | <code>str</code> | Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmInsecure">winrm_insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPassCredentials">winrm_pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPort">winrm_port</a></code> | <code>typing.Union[int, float]</code> | The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmProto">winrm_proto</a></code> | <code>str</code> | The WinRM protocol we will use. (default: http, environment variable: AD_PROTO). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmUseNtlm">winrm_use_ntlm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `winrm_hostname`<sup>Required</sup> <a name="winrm_hostname" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmHostname"></a>

- *Type:* str

The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_hostname AdProvider#winrm_hostname}

---

##### `winrm_password`<sup>Required</sup> <a name="winrm_password" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPassword"></a>

- *Type:* str

The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_password AdProvider#winrm_password}

---

##### `winrm_username`<sup>Required</sup> <a name="winrm_username" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmUsername"></a>

- *Type:* str

The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_username AdProvider#winrm_username}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#alias AdProvider#alias}

---

##### `domain_controller`<sup>Optional</sup> <a name="domain_controller" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.domainController"></a>

- *Type:* str

Use a specific domain controller. (default: none, environment variable: AD_DC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#domain_controller AdProvider#domain_controller}

---

##### `krb_conf`<sup>Optional</sup> <a name="krb_conf" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbConf"></a>

- *Type:* str

Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_conf AdProvider#krb_conf}

---

##### `krb_keytab`<sup>Optional</sup> <a name="krb_keytab" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbKeytab"></a>

- *Type:* str

Path to a keytab file to be used instead of a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_keytab AdProvider#krb_keytab}

---

##### `krb_realm`<sup>Optional</sup> <a name="krb_realm" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbRealm"></a>

- *Type:* str

The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_realm AdProvider#krb_realm}

---

##### `krb_spn`<sup>Optional</sup> <a name="krb_spn" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbSpn"></a>

- *Type:* str

Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_spn AdProvider#krb_spn}

---

##### `winrm_insecure`<sup>Optional</sup> <a name="winrm_insecure" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmInsecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_insecure AdProvider#winrm_insecure}

---

##### `winrm_pass_credentials`<sup>Optional</sup> <a name="winrm_pass_credentials" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPassCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_pass_credentials AdProvider#winrm_pass_credentials}

---

##### `winrm_port`<sup>Optional</sup> <a name="winrm_port" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPort"></a>

- *Type:* typing.Union[int, float]

The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_port AdProvider#winrm_port}

---

##### `winrm_proto`<sup>Optional</sup> <a name="winrm_proto" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmProto"></a>

- *Type:* str

The WinRM protocol we will use. (default: http, environment variable: AD_PROTO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_proto AdProvider#winrm_proto}

---

##### `winrm_use_ntlm`<sup>Optional</sup> <a name="winrm_use_ntlm" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmUseNtlm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_use_ntlm AdProvider#winrm_use_ntlm}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetDomainController">reset_domain_controller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbConf">reset_krb_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab">reset_krb_keytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbRealm">reset_krb_realm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbSpn">reset_krb_spn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure">reset_winrm_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials">reset_winrm_pass_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmPort">reset_winrm_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmProto">reset_winrm_proto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm">reset_winrm_use_ntlm</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ad.provider.AdProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ad.provider.AdProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ad.provider.AdProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ad.provider.AdProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-ad.provider.AdProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_domain_controller` <a name="reset_domain_controller" id="@cdktf/provider-ad.provider.AdProvider.resetDomainController"></a>

```python
def reset_domain_controller() -> None
```

##### `reset_krb_conf` <a name="reset_krb_conf" id="@cdktf/provider-ad.provider.AdProvider.resetKrbConf"></a>

```python
def reset_krb_conf() -> None
```

##### `reset_krb_keytab` <a name="reset_krb_keytab" id="@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab"></a>

```python
def reset_krb_keytab() -> None
```

##### `reset_krb_realm` <a name="reset_krb_realm" id="@cdktf/provider-ad.provider.AdProvider.resetKrbRealm"></a>

```python
def reset_krb_realm() -> None
```

##### `reset_krb_spn` <a name="reset_krb_spn" id="@cdktf/provider-ad.provider.AdProvider.resetKrbSpn"></a>

```python
def reset_krb_spn() -> None
```

##### `reset_winrm_insecure` <a name="reset_winrm_insecure" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure"></a>

```python
def reset_winrm_insecure() -> None
```

##### `reset_winrm_pass_credentials` <a name="reset_winrm_pass_credentials" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials"></a>

```python
def reset_winrm_pass_credentials() -> None
```

##### `reset_winrm_port` <a name="reset_winrm_port" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPort"></a>

```python
def reset_winrm_port() -> None
```

##### `reset_winrm_proto` <a name="reset_winrm_proto" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmProto"></a>

```python
def reset_winrm_proto() -> None
```

##### `reset_winrm_use_ntlm` <a name="reset_winrm_use_ntlm" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm"></a>

```python
def reset_winrm_use_ntlm() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AdProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ad.provider.AdProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_ad import provider

provider.AdProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ad import provider

provider.AdProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_ad import provider

provider.AdProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ad import provider

provider.AdProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AdProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AdProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AdProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.provider.AdProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput">domain_controller_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConfInput">krb_conf_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput">krb_keytab_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput">krb_realm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput">krb_spn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput">winrm_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput">winrm_insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput">winrm_pass_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput">winrm_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput">winrm_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput">winrm_proto_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput">winrm_use_ntlm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput">winrm_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainController">domain_controller</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConf">krb_conf</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytab">krb_keytab</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealm">krb_realm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpn">krb_spn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostname">winrm_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure">winrm_insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials">winrm_pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassword">winrm_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPort">winrm_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProto">winrm_proto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm">winrm_use_ntlm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsername">winrm_username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.provider.AdProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ad.provider.AdProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.provider.AdProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-ad.provider.AdProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-ad.provider.AdProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `domain_controller_input`<sup>Optional</sup> <a name="domain_controller_input" id="@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput"></a>

```python
domain_controller_input: str
```

- *Type:* str

---

##### `krb_conf_input`<sup>Optional</sup> <a name="krb_conf_input" id="@cdktf/provider-ad.provider.AdProvider.property.krbConfInput"></a>

```python
krb_conf_input: str
```

- *Type:* str

---

##### `krb_keytab_input`<sup>Optional</sup> <a name="krb_keytab_input" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput"></a>

```python
krb_keytab_input: str
```

- *Type:* str

---

##### `krb_realm_input`<sup>Optional</sup> <a name="krb_realm_input" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput"></a>

```python
krb_realm_input: str
```

- *Type:* str

---

##### `krb_spn_input`<sup>Optional</sup> <a name="krb_spn_input" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput"></a>

```python
krb_spn_input: str
```

- *Type:* str

---

##### `winrm_hostname_input`<sup>Optional</sup> <a name="winrm_hostname_input" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput"></a>

```python
winrm_hostname_input: str
```

- *Type:* str

---

##### `winrm_insecure_input`<sup>Optional</sup> <a name="winrm_insecure_input" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput"></a>

```python
winrm_insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `winrm_pass_credentials_input`<sup>Optional</sup> <a name="winrm_pass_credentials_input" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput"></a>

```python
winrm_pass_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `winrm_password_input`<sup>Optional</sup> <a name="winrm_password_input" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput"></a>

```python
winrm_password_input: str
```

- *Type:* str

---

##### `winrm_port_input`<sup>Optional</sup> <a name="winrm_port_input" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput"></a>

```python
winrm_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `winrm_proto_input`<sup>Optional</sup> <a name="winrm_proto_input" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput"></a>

```python
winrm_proto_input: str
```

- *Type:* str

---

##### `winrm_use_ntlm_input`<sup>Optional</sup> <a name="winrm_use_ntlm_input" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput"></a>

```python
winrm_use_ntlm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `winrm_username_input`<sup>Optional</sup> <a name="winrm_username_input" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput"></a>

```python
winrm_username_input: str
```

- *Type:* str

---

##### `domain_controller`<sup>Optional</sup> <a name="domain_controller" id="@cdktf/provider-ad.provider.AdProvider.property.domainController"></a>

```python
domain_controller: str
```

- *Type:* str

---

##### `krb_conf`<sup>Optional</sup> <a name="krb_conf" id="@cdktf/provider-ad.provider.AdProvider.property.krbConf"></a>

```python
krb_conf: str
```

- *Type:* str

---

##### `krb_keytab`<sup>Optional</sup> <a name="krb_keytab" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytab"></a>

```python
krb_keytab: str
```

- *Type:* str

---

##### `krb_realm`<sup>Optional</sup> <a name="krb_realm" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealm"></a>

```python
krb_realm: str
```

- *Type:* str

---

##### `krb_spn`<sup>Optional</sup> <a name="krb_spn" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpn"></a>

```python
krb_spn: str
```

- *Type:* str

---

##### `winrm_hostname`<sup>Optional</sup> <a name="winrm_hostname" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostname"></a>

```python
winrm_hostname: str
```

- *Type:* str

---

##### `winrm_insecure`<sup>Optional</sup> <a name="winrm_insecure" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure"></a>

```python
winrm_insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `winrm_pass_credentials`<sup>Optional</sup> <a name="winrm_pass_credentials" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials"></a>

```python
winrm_pass_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `winrm_password`<sup>Optional</sup> <a name="winrm_password" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassword"></a>

```python
winrm_password: str
```

- *Type:* str

---

##### `winrm_port`<sup>Optional</sup> <a name="winrm_port" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPort"></a>

```python
winrm_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `winrm_proto`<sup>Optional</sup> <a name="winrm_proto" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProto"></a>

```python
winrm_proto: str
```

- *Type:* str

---

##### `winrm_use_ntlm`<sup>Optional</sup> <a name="winrm_use_ntlm" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm"></a>

```python
winrm_use_ntlm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `winrm_username`<sup>Optional</sup> <a name="winrm_username" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsername"></a>

```python
winrm_username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AdProviderConfig <a name="AdProviderConfig" id="@cdktf/provider-ad.provider.AdProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.provider.AdProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ad import provider

provider.AdProviderConfig(
  winrm_hostname: str,
  winrm_password: str,
  winrm_username: str,
  alias: str = None,
  domain_controller: str = None,
  krb_conf: str = None,
  krb_keytab: str = None,
  krb_realm: str = None,
  krb_spn: str = None,
  winrm_insecure: typing.Union[bool, IResolvable] = None,
  winrm_pass_credentials: typing.Union[bool, IResolvable] = None,
  winrm_port: typing.Union[int, float] = None,
  winrm_proto: str = None,
  winrm_use_ntlm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname">winrm_hostname</a></code> | <code>str</code> | The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword">winrm_password</a></code> | <code>str</code> | The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername">winrm_username</a></code> | <code>str</code> | The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.domainController">domain_controller</a></code> | <code>str</code> | Use a specific domain controller. (default: none, environment variable: AD_DC). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf">krb_conf</a></code> | <code>str</code> | Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab">krb_keytab</a></code> | <code>str</code> | Path to a keytab file to be used instead of a password. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm">krb_realm</a></code> | <code>str</code> | The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn">krb_spn</a></code> | <code>str</code> | Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure">winrm_insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials">winrm_pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort">winrm_port</a></code> | <code>typing.Union[int, float]</code> | The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto">winrm_proto</a></code> | <code>str</code> | The WinRM protocol we will use. (default: http, environment variable: AD_PROTO). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm">winrm_use_ntlm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM). |

---

##### `winrm_hostname`<sup>Required</sup> <a name="winrm_hostname" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname"></a>

```python
winrm_hostname: str
```

- *Type:* str

The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_hostname AdProvider#winrm_hostname}

---

##### `winrm_password`<sup>Required</sup> <a name="winrm_password" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword"></a>

```python
winrm_password: str
```

- *Type:* str

The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_password AdProvider#winrm_password}

---

##### `winrm_username`<sup>Required</sup> <a name="winrm_username" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername"></a>

```python
winrm_username: str
```

- *Type:* str

The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_username AdProvider#winrm_username}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#alias AdProvider#alias}

---

##### `domain_controller`<sup>Optional</sup> <a name="domain_controller" id="@cdktf/provider-ad.provider.AdProviderConfig.property.domainController"></a>

```python
domain_controller: str
```

- *Type:* str

Use a specific domain controller. (default: none, environment variable: AD_DC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#domain_controller AdProvider#domain_controller}

---

##### `krb_conf`<sup>Optional</sup> <a name="krb_conf" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf"></a>

```python
krb_conf: str
```

- *Type:* str

Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_conf AdProvider#krb_conf}

---

##### `krb_keytab`<sup>Optional</sup> <a name="krb_keytab" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab"></a>

```python
krb_keytab: str
```

- *Type:* str

Path to a keytab file to be used instead of a password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_keytab AdProvider#krb_keytab}

---

##### `krb_realm`<sup>Optional</sup> <a name="krb_realm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm"></a>

```python
krb_realm: str
```

- *Type:* str

The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_realm AdProvider#krb_realm}

---

##### `krb_spn`<sup>Optional</sup> <a name="krb_spn" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn"></a>

```python
krb_spn: str
```

- *Type:* str

Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#krb_spn AdProvider#krb_spn}

---

##### `winrm_insecure`<sup>Optional</sup> <a name="winrm_insecure" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure"></a>

```python
winrm_insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_insecure AdProvider#winrm_insecure}

---

##### `winrm_pass_credentials`<sup>Optional</sup> <a name="winrm_pass_credentials" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials"></a>

```python
winrm_pass_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_pass_credentials AdProvider#winrm_pass_credentials}

---

##### `winrm_port`<sup>Optional</sup> <a name="winrm_port" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort"></a>

```python
winrm_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_port AdProvider#winrm_port}

---

##### `winrm_proto`<sup>Optional</sup> <a name="winrm_proto" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto"></a>

```python
winrm_proto: str
```

- *Type:* str

The WinRM protocol we will use. (default: http, environment variable: AD_PROTO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_proto AdProvider#winrm_proto}

---

##### `winrm_use_ntlm`<sup>Optional</sup> <a name="winrm_use_ntlm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm"></a>

```python
winrm_use_ntlm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs#winrm_use_ntlm AdProvider#winrm_use_ntlm}

---



