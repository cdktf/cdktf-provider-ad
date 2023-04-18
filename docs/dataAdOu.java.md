# `dataAdOu` Submodule <a name="`dataAdOu` Submodule" id="@cdktf/provider-ad.dataAdOu"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAdOu <a name="DataAdOu" id="@cdktf/provider-ad.dataAdOu.DataAdOu"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou ad_ou}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.data_ad_ou.DataAdOu;

DataAdOu.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .dn(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .ouId(java.lang.String)
//  .path(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.dn">dn</a></code> | <code>java.lang.String</code> | Distinguished Name of the OU object. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#id DataAdOu#id}. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the OU object. If this is used then the `path` attribute needs to be set as well. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.ouId">ouId</a></code> | <code>java.lang.String</code> | The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path of the OU object. If this is used then the `Name` attribute needs to be set as well. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dn`<sup>Optional</sup> <a name="dn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.dn"></a>

- *Type:* java.lang.String

Distinguished Name of the OU object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#dn DataAdOu#dn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#id DataAdOu#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the OU object. If this is used then the `path` attribute needs to be set as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#name DataAdOu#name}

---

##### `ouId`<sup>Optional</sup> <a name="ouId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.ouId"></a>

- *Type:* java.lang.String

The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#ou_id DataAdOu#ou_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-ad.dataAdOu.DataAdOu.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path of the OU object. If this is used then the `Name` attribute needs to be set as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#path DataAdOu#path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetDn">resetDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetOuId">resetOuId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.resetPath">resetPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdOu.DataAdOu.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.dataAdOu.DataAdOu.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdOu.DataAdOu.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDn` <a name="resetDn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetDn"></a>

```java
public void resetDn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetName"></a>

```java
public void resetName()
```

##### `resetOuId` <a name="resetOuId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetOuId"></a>

```java
public void resetOuId()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-ad.dataAdOu.DataAdOu.resetPath"></a>

```java
public void resetPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ad.data_ad_ou.DataAdOu;

DataAdOu.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ad.data_ad_ou.DataAdOu;

DataAdOu.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.ad.data_ad_ou.DataAdOu;

DataAdOu.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdOu.DataAdOu.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.protected">protected</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dnInput">dnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouIdInput">ouIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.dn">dn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouId">ouId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.protected"></a>

```java
public java.lang.String getProtected();
```

- *Type:* java.lang.String

---

##### `dnInput`<sup>Optional</sup> <a name="dnInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dnInput"></a>

```java
public java.lang.String getDnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ouIdInput`<sup>Optional</sup> <a name="ouIdInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouIdInput"></a>

```java
public java.lang.String getOuIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.dn"></a>

```java
public java.lang.String getDn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ouId`<sup>Required</sup> <a name="ouId" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.ouId"></a>

```java
public java.lang.String getOuId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOu.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.dataAdOu.DataAdOu.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAdOuConfig <a name="DataAdOuConfig" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.data_ad_ou.DataAdOuConfig;

DataAdOuConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .dn(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .ouId(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dn">dn</a></code> | <code>java.lang.String</code> | Distinguished Name of the OU object. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#id DataAdOu#id}. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the OU object. If this is used then the `path` attribute needs to be set as well. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.ouId">ouId</a></code> | <code>java.lang.String</code> | The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path of the OU object. If this is used then the `Name` attribute needs to be set as well. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dn`<sup>Optional</sup> <a name="dn" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.dn"></a>

```java
public java.lang.String getDn();
```

- *Type:* java.lang.String

Distinguished Name of the OU object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#dn DataAdOu#dn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#id DataAdOu#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the OU object. If this is used then the `path` attribute needs to be set as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#name DataAdOu#name}

---

##### `ouId`<sup>Optional</sup> <a name="ouId" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.ouId"></a>

```java
public java.lang.String getOuId();
```

- *Type:* java.lang.String

The OU's identifier. It can be the OU's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#ou_id DataAdOu#ou_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-ad.dataAdOu.DataAdOuConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the OU object. If this is used then the `Name` attribute needs to be set as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/ou#path DataAdOu#path}

---



