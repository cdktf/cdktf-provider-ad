# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdProvider <a name="AdProvider" id="@cdktf/provider-ad.provider.AdProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/ad ad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.provider.AdProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.provider.AdProvider;

AdProvider.Builder.create(Construct scope, java.lang.String id)
    .winrmHostname(java.lang.String)
    .winrmPassword(java.lang.String)
    .winrmUsername(java.lang.String)
//  .alias(java.lang.String)
//  .domainController(java.lang.String)
//  .krbConf(java.lang.String)
//  .krbKeytab(java.lang.String)
//  .krbRealm(java.lang.String)
//  .krbSpn(java.lang.String)
//  .winrmInsecure(java.lang.Boolean)
//  .winrmInsecure(IResolvable)
//  .winrmPassCredentials(java.lang.Boolean)
//  .winrmPassCredentials(IResolvable)
//  .winrmPort(java.lang.Number)
//  .winrmProto(java.lang.String)
//  .winrmUseNtlm(java.lang.Boolean)
//  .winrmUseNtlm(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmHostname">winrmHostname</a></code> | <code>java.lang.String</code> | The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPassword">winrmPassword</a></code> | <code>java.lang.String</code> | The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmUsername">winrmUsername</a></code> | <code>java.lang.String</code> | The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.domainController">domainController</a></code> | <code>java.lang.String</code> | Use a specific domain controller. (default: none, environment variable: AD_DC). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbConf">krbConf</a></code> | <code>java.lang.String</code> | Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbKeytab">krbKeytab</a></code> | <code>java.lang.String</code> | Path to a keytab file to be used instead of a password. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbRealm">krbRealm</a></code> | <code>java.lang.String</code> | The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbSpn">krbSpn</a></code> | <code>java.lang.String</code> | Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmInsecure">winrmInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPassCredentials">winrmPassCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPort">winrmPort</a></code> | <code>java.lang.Number</code> | The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmProto">winrmProto</a></code> | <code>java.lang.String</code> | The WinRM protocol we will use. (default: http, environment variable: AD_PROTO). |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmUseNtlm">winrmUseNtlm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `winrmHostname`<sup>Required</sup> <a name="winrmHostname" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmHostname"></a>

- *Type:* java.lang.String

The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_hostname AdProvider#winrm_hostname}

---

##### `winrmPassword`<sup>Required</sup> <a name="winrmPassword" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPassword"></a>

- *Type:* java.lang.String

The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_password AdProvider#winrm_password}

---

##### `winrmUsername`<sup>Required</sup> <a name="winrmUsername" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmUsername"></a>

- *Type:* java.lang.String

The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_username AdProvider#winrm_username}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#alias AdProvider#alias}

---

##### `domainController`<sup>Optional</sup> <a name="domainController" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.domainController"></a>

- *Type:* java.lang.String

Use a specific domain controller. (default: none, environment variable: AD_DC).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#domain_controller AdProvider#domain_controller}

---

##### `krbConf`<sup>Optional</sup> <a name="krbConf" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbConf"></a>

- *Type:* java.lang.String

Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_conf AdProvider#krb_conf}

---

##### `krbKeytab`<sup>Optional</sup> <a name="krbKeytab" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbKeytab"></a>

- *Type:* java.lang.String

Path to a keytab file to be used instead of a password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_keytab AdProvider#krb_keytab}

---

##### `krbRealm`<sup>Optional</sup> <a name="krbRealm" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbRealm"></a>

- *Type:* java.lang.String

The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_realm AdProvider#krb_realm}

---

##### `krbSpn`<sup>Optional</sup> <a name="krbSpn" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.krbSpn"></a>

- *Type:* java.lang.String

Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_spn AdProvider#krb_spn}

---

##### `winrmInsecure`<sup>Optional</sup> <a name="winrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmInsecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_insecure AdProvider#winrm_insecure}

---

##### `winrmPassCredentials`<sup>Optional</sup> <a name="winrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPassCredentials"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_pass_credentials AdProvider#winrm_pass_credentials}

---

##### `winrmPort`<sup>Optional</sup> <a name="winrmPort" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmPort"></a>

- *Type:* java.lang.Number

The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_port AdProvider#winrm_port}

---

##### `winrmProto`<sup>Optional</sup> <a name="winrmProto" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmProto"></a>

- *Type:* java.lang.String

The WinRM protocol we will use. (default: http, environment variable: AD_PROTO).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_proto AdProvider#winrm_proto}

---

##### `winrmUseNtlm`<sup>Optional</sup> <a name="winrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.Initializer.parameter.winrmUseNtlm"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_use_ntlm AdProvider#winrm_use_ntlm}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetDomainController">resetDomainController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbConf">resetKrbConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab">resetKrbKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbRealm">resetKrbRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetKrbSpn">resetKrbSpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure">resetWinrmInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials">resetWinrmPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmPort">resetWinrmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmProto">resetWinrmProto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm">resetWinrmUseNtlm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.provider.AdProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.provider.AdProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.provider.AdProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.provider.AdProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.provider.AdProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.provider.AdProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.provider.AdProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-ad.provider.AdProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetDomainController` <a name="resetDomainController" id="@cdktf/provider-ad.provider.AdProvider.resetDomainController"></a>

```java
public void resetDomainController()
```

##### `resetKrbConf` <a name="resetKrbConf" id="@cdktf/provider-ad.provider.AdProvider.resetKrbConf"></a>

```java
public void resetKrbConf()
```

##### `resetKrbKeytab` <a name="resetKrbKeytab" id="@cdktf/provider-ad.provider.AdProvider.resetKrbKeytab"></a>

```java
public void resetKrbKeytab()
```

##### `resetKrbRealm` <a name="resetKrbRealm" id="@cdktf/provider-ad.provider.AdProvider.resetKrbRealm"></a>

```java
public void resetKrbRealm()
```

##### `resetKrbSpn` <a name="resetKrbSpn" id="@cdktf/provider-ad.provider.AdProvider.resetKrbSpn"></a>

```java
public void resetKrbSpn()
```

##### `resetWinrmInsecure` <a name="resetWinrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmInsecure"></a>

```java
public void resetWinrmInsecure()
```

##### `resetWinrmPassCredentials` <a name="resetWinrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPassCredentials"></a>

```java
public void resetWinrmPassCredentials()
```

##### `resetWinrmPort` <a name="resetWinrmPort" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmPort"></a>

```java
public void resetWinrmPort()
```

##### `resetWinrmProto` <a name="resetWinrmProto" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmProto"></a>

```java
public void resetWinrmProto()
```

##### `resetWinrmUseNtlm` <a name="resetWinrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.resetWinrmUseNtlm"></a>

```java
public void resetWinrmUseNtlm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.provider.AdProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ad.provider.AdProvider;

AdProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ad.provider.AdProvider;

AdProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.ad.provider.AdProvider;

AdProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.provider.AdProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput">domainControllerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConfInput">krbConfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput">krbKeytabInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput">krbRealmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput">krbSpnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput">winrmHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput">winrmInsecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput">winrmPassCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput">winrmPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput">winrmPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput">winrmProtoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput">winrmUseNtlmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput">winrmUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.domainController">domainController</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbConf">krbConf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbKeytab">krbKeytab</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbRealm">krbRealm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.krbSpn">krbSpn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmHostname">winrmHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure">winrmInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials">winrmPassCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPassword">winrmPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmPort">winrmPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmProto">winrmProto</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm">winrmUseNtlm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.winrmUsername">winrmUsername</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.provider.AdProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.provider.AdProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.provider.AdProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.provider.AdProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-ad.provider.AdProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.provider.AdProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-ad.provider.AdProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-ad.provider.AdProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `domainControllerInput`<sup>Optional</sup> <a name="domainControllerInput" id="@cdktf/provider-ad.provider.AdProvider.property.domainControllerInput"></a>

```java
public java.lang.String getDomainControllerInput();
```

- *Type:* java.lang.String

---

##### `krbConfInput`<sup>Optional</sup> <a name="krbConfInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbConfInput"></a>

```java
public java.lang.String getKrbConfInput();
```

- *Type:* java.lang.String

---

##### `krbKeytabInput`<sup>Optional</sup> <a name="krbKeytabInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytabInput"></a>

```java
public java.lang.String getKrbKeytabInput();
```

- *Type:* java.lang.String

---

##### `krbRealmInput`<sup>Optional</sup> <a name="krbRealmInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealmInput"></a>

```java
public java.lang.String getKrbRealmInput();
```

- *Type:* java.lang.String

---

##### `krbSpnInput`<sup>Optional</sup> <a name="krbSpnInput" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpnInput"></a>

```java
public java.lang.String getKrbSpnInput();
```

- *Type:* java.lang.String

---

##### `winrmHostnameInput`<sup>Optional</sup> <a name="winrmHostnameInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostnameInput"></a>

```java
public java.lang.String getWinrmHostnameInput();
```

- *Type:* java.lang.String

---

##### `winrmInsecureInput`<sup>Optional</sup> <a name="winrmInsecureInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecureInput"></a>

```java
public java.lang.Object getWinrmInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `winrmPassCredentialsInput`<sup>Optional</sup> <a name="winrmPassCredentialsInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentialsInput"></a>

```java
public java.lang.Object getWinrmPassCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `winrmPasswordInput`<sup>Optional</sup> <a name="winrmPasswordInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPasswordInput"></a>

```java
public java.lang.String getWinrmPasswordInput();
```

- *Type:* java.lang.String

---

##### `winrmPortInput`<sup>Optional</sup> <a name="winrmPortInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPortInput"></a>

```java
public java.lang.Number getWinrmPortInput();
```

- *Type:* java.lang.Number

---

##### `winrmProtoInput`<sup>Optional</sup> <a name="winrmProtoInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProtoInput"></a>

```java
public java.lang.String getWinrmProtoInput();
```

- *Type:* java.lang.String

---

##### `winrmUseNtlmInput`<sup>Optional</sup> <a name="winrmUseNtlmInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlmInput"></a>

```java
public java.lang.Object getWinrmUseNtlmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `winrmUsernameInput`<sup>Optional</sup> <a name="winrmUsernameInput" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsernameInput"></a>

```java
public java.lang.String getWinrmUsernameInput();
```

- *Type:* java.lang.String

---

##### `domainController`<sup>Optional</sup> <a name="domainController" id="@cdktf/provider-ad.provider.AdProvider.property.domainController"></a>

```java
public java.lang.String getDomainController();
```

- *Type:* java.lang.String

---

##### `krbConf`<sup>Optional</sup> <a name="krbConf" id="@cdktf/provider-ad.provider.AdProvider.property.krbConf"></a>

```java
public java.lang.String getKrbConf();
```

- *Type:* java.lang.String

---

##### `krbKeytab`<sup>Optional</sup> <a name="krbKeytab" id="@cdktf/provider-ad.provider.AdProvider.property.krbKeytab"></a>

```java
public java.lang.String getKrbKeytab();
```

- *Type:* java.lang.String

---

##### `krbRealm`<sup>Optional</sup> <a name="krbRealm" id="@cdktf/provider-ad.provider.AdProvider.property.krbRealm"></a>

```java
public java.lang.String getKrbRealm();
```

- *Type:* java.lang.String

---

##### `krbSpn`<sup>Optional</sup> <a name="krbSpn" id="@cdktf/provider-ad.provider.AdProvider.property.krbSpn"></a>

```java
public java.lang.String getKrbSpn();
```

- *Type:* java.lang.String

---

##### `winrmHostname`<sup>Optional</sup> <a name="winrmHostname" id="@cdktf/provider-ad.provider.AdProvider.property.winrmHostname"></a>

```java
public java.lang.String getWinrmHostname();
```

- *Type:* java.lang.String

---

##### `winrmInsecure`<sup>Optional</sup> <a name="winrmInsecure" id="@cdktf/provider-ad.provider.AdProvider.property.winrmInsecure"></a>

```java
public java.lang.Object getWinrmInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `winrmPassCredentials`<sup>Optional</sup> <a name="winrmPassCredentials" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassCredentials"></a>

```java
public java.lang.Object getWinrmPassCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `winrmPassword`<sup>Optional</sup> <a name="winrmPassword" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPassword"></a>

```java
public java.lang.String getWinrmPassword();
```

- *Type:* java.lang.String

---

##### `winrmPort`<sup>Optional</sup> <a name="winrmPort" id="@cdktf/provider-ad.provider.AdProvider.property.winrmPort"></a>

```java
public java.lang.Number getWinrmPort();
```

- *Type:* java.lang.Number

---

##### `winrmProto`<sup>Optional</sup> <a name="winrmProto" id="@cdktf/provider-ad.provider.AdProvider.property.winrmProto"></a>

```java
public java.lang.String getWinrmProto();
```

- *Type:* java.lang.String

---

##### `winrmUseNtlm`<sup>Optional</sup> <a name="winrmUseNtlm" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUseNtlm"></a>

```java
public java.lang.Object getWinrmUseNtlm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `winrmUsername`<sup>Optional</sup> <a name="winrmUsername" id="@cdktf/provider-ad.provider.AdProvider.property.winrmUsername"></a>

```java
public java.lang.String getWinrmUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.provider.AdProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AdProviderConfig <a name="AdProviderConfig" id="@cdktf/provider-ad.provider.AdProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.provider.AdProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.provider.AdProviderConfig;

AdProviderConfig.builder()
    .winrmHostname(java.lang.String)
    .winrmPassword(java.lang.String)
    .winrmUsername(java.lang.String)
//  .alias(java.lang.String)
//  .domainController(java.lang.String)
//  .krbConf(java.lang.String)
//  .krbKeytab(java.lang.String)
//  .krbRealm(java.lang.String)
//  .krbSpn(java.lang.String)
//  .winrmInsecure(java.lang.Boolean)
//  .winrmInsecure(IResolvable)
//  .winrmPassCredentials(java.lang.Boolean)
//  .winrmPassCredentials(IResolvable)
//  .winrmPort(java.lang.Number)
//  .winrmProto(java.lang.String)
//  .winrmUseNtlm(java.lang.Boolean)
//  .winrmUseNtlm(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname">winrmHostname</a></code> | <code>java.lang.String</code> | The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword">winrmPassword</a></code> | <code>java.lang.String</code> | The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername">winrmUsername</a></code> | <code>java.lang.String</code> | The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.domainController">domainController</a></code> | <code>java.lang.String</code> | Use a specific domain controller. (default: none, environment variable: AD_DC). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf">krbConf</a></code> | <code>java.lang.String</code> | Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab">krbKeytab</a></code> | <code>java.lang.String</code> | Path to a keytab file to be used instead of a password. |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm">krbRealm</a></code> | <code>java.lang.String</code> | The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn">krbSpn</a></code> | <code>java.lang.String</code> | Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure">winrmInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials">winrmPassCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort">winrmPort</a></code> | <code>java.lang.Number</code> | The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto">winrmProto</a></code> | <code>java.lang.String</code> | The WinRM protocol we will use. (default: http, environment variable: AD_PROTO). |
| <code><a href="#@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm">winrmUseNtlm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM). |

---

##### `winrmHostname`<sup>Required</sup> <a name="winrmHostname" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmHostname"></a>

```java
public java.lang.String getWinrmHostname();
```

- *Type:* java.lang.String

The hostname of the server we will use to run powershell scripts over WinRM. (Environment variable: AD_HOSTNAME).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_hostname AdProvider#winrm_hostname}

---

##### `winrmPassword`<sup>Required</sup> <a name="winrmPassword" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassword"></a>

```java
public java.lang.String getWinrmPassword();
```

- *Type:* java.lang.String

The password used to authenticate to the server's WinRM service. (Environment variable: AD_PASSWORD).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_password AdProvider#winrm_password}

---

##### `winrmUsername`<sup>Required</sup> <a name="winrmUsername" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUsername"></a>

```java
public java.lang.String getWinrmUsername();
```

- *Type:* java.lang.String

The username used to authenticate to the server's WinRM service. (Environment variable: AD_USER).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_username AdProvider#winrm_username}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-ad.provider.AdProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#alias AdProvider#alias}

---

##### `domainController`<sup>Optional</sup> <a name="domainController" id="@cdktf/provider-ad.provider.AdProviderConfig.property.domainController"></a>

```java
public java.lang.String getDomainController();
```

- *Type:* java.lang.String

Use a specific domain controller. (default: none, environment variable: AD_DC).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#domain_controller AdProvider#domain_controller}

---

##### `krbConf`<sup>Optional</sup> <a name="krbConf" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbConf"></a>

```java
public java.lang.String getKrbConf();
```

- *Type:* java.lang.String

Path to kerberos configuration file. (default: none, environment variable: AD_KRB_CONF).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_conf AdProvider#krb_conf}

---

##### `krbKeytab`<sup>Optional</sup> <a name="krbKeytab" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbKeytab"></a>

```java
public java.lang.String getKrbKeytab();
```

- *Type:* java.lang.String

Path to a keytab file to be used instead of a password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_keytab AdProvider#krb_keytab}

---

##### `krbRealm`<sup>Optional</sup> <a name="krbRealm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbRealm"></a>

```java
public java.lang.String getKrbRealm();
```

- *Type:* java.lang.String

The name of the kerberos realm (domain) we will use for authentication. (default: "", environment variable: AD_KRB_REALM).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_realm AdProvider#krb_realm}

---

##### `krbSpn`<sup>Optional</sup> <a name="krbSpn" id="@cdktf/provider-ad.provider.AdProviderConfig.property.krbSpn"></a>

```java
public java.lang.String getKrbSpn();
```

- *Type:* java.lang.String

Alternative Service Principal Name. (default: none, environment variable: AD_KRB_SPN).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#krb_spn AdProvider#krb_spn}

---

##### `winrmInsecure`<sup>Optional</sup> <a name="winrmInsecure" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmInsecure"></a>

```java
public java.lang.Object getWinrmInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Trust unknown certificates. (default: false, environment variable: AD_WINRM_INSECURE).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_insecure AdProvider#winrm_insecure}

---

##### `winrmPassCredentials`<sup>Optional</sup> <a name="winrmPassCredentials" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPassCredentials"></a>

```java
public java.lang.Object getWinrmPassCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Pass credentials in WinRM session to create a System.Management.Automation.PSCredential. (default: false, environment variable: AD_WINRM_PASS_CREDENTIALS).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_pass_credentials AdProvider#winrm_pass_credentials}

---

##### `winrmPort`<sup>Optional</sup> <a name="winrmPort" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmPort"></a>

```java
public java.lang.Number getWinrmPort();
```

- *Type:* java.lang.Number

The port WinRM is listening for connections. (default: 5985, environment variable: AD_PORT).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_port AdProvider#winrm_port}

---

##### `winrmProto`<sup>Optional</sup> <a name="winrmProto" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmProto"></a>

```java
public java.lang.String getWinrmProto();
```

- *Type:* java.lang.String

The WinRM protocol we will use. (default: http, environment variable: AD_PROTO).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_proto AdProvider#winrm_proto}

---

##### `winrmUseNtlm`<sup>Optional</sup> <a name="winrmUseNtlm" id="@cdktf/provider-ad.provider.AdProviderConfig.property.winrmUseNtlm"></a>

```java
public java.lang.Object getWinrmUseNtlm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use NTLM authentication. (default: false, environment variable: AD_WINRM_USE_NTLM).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ad#winrm_use_ntlm AdProvider#winrm_use_ntlm}

---



