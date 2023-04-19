# `data_ad_user`

Refer to the Terraform Registory for docs: [`data_ad_user`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user).

# `dataAdUser` Submodule <a name="`dataAdUser` Submodule" id="@cdktf/provider-ad.dataAdUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAdUser <a name="DataAdUser" id="@cdktf/provider-ad.dataAdUser.DataAdUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user ad_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer"></a>

```typescript
import { dataAdUser } from '@cdktf/provider-ad'

new dataAdUser.DataAdUser(scope: Construct, id: string, config: DataAdUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig">DataAdUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ad.dataAdUser.DataAdUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig">DataAdUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.dataAdUser.DataAdUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.dataAdUser.DataAdUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.dataAdUser.DataAdUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isConstruct"></a>

```typescript
import { dataAdUser } from '@cdktf/provider-ad'

dataAdUser.DataAdUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformElement"></a>

```typescript
import { dataAdUser } from '@cdktf/provider-ad'

dataAdUser.DataAdUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformDataSource"></a>

```typescript
import { dataAdUser } from '@cdktf/provider-ad'

dataAdUser.DataAdUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.dataAdUser.DataAdUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.company">company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.department">department</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.division">division</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeId">employeeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeNumber">employeeNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.fax">fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDrive">homeDrive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePage">homePage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePhone">homePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.mobilePhone">mobilePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.office">office</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.officePhone">officePhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.otherName">otherName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.poBox">poBox</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.principalName">principalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.samAccountName">samAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.sid">sid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.smartCardLogonRequired">smartCardLogonRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.trustedForDelegation">trustedForDelegation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.company"></a>

```typescript
public readonly company: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.department"></a>

```typescript
public readonly department: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.division"></a>

```typescript
public readonly division: string;
```

- *Type:* string

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeId"></a>

```typescript
public readonly employeeId: string;
```

- *Type:* string

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.employeeNumber"></a>

```typescript
public readonly employeeNumber: string;
```

- *Type:* string

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.fax"></a>

```typescript
public readonly fax: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

---

##### `homeDrive`<sup>Required</sup> <a name="homeDrive" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homeDrive"></a>

```typescript
public readonly homeDrive: string;
```

- *Type:* string

---

##### `homePage`<sup>Required</sup> <a name="homePage" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePage"></a>

```typescript
public readonly homePage: string;
```

- *Type:* string

---

##### `homePhone`<sup>Required</sup> <a name="homePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.homePhone"></a>

```typescript
public readonly homePhone: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.mobilePhone"></a>

```typescript
public readonly mobilePhone: string;
```

- *Type:* string

---

##### `office`<sup>Required</sup> <a name="office" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.office"></a>

```typescript
public readonly office: string;
```

- *Type:* string

---

##### `officePhone`<sup>Required</sup> <a name="officePhone" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.officePhone"></a>

```typescript
public readonly officePhone: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `otherName`<sup>Required</sup> <a name="otherName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.otherName"></a>

```typescript
public readonly otherName: string;
```

- *Type:* string

---

##### `poBox`<sup>Required</sup> <a name="poBox" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.poBox"></a>

```typescript
public readonly poBox: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.principalName"></a>

```typescript
public readonly principalName: string;
```

- *Type:* string

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.samAccountName"></a>

```typescript
public readonly samAccountName: string;
```

- *Type:* string

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.sid"></a>

```typescript
public readonly sid: string;
```

- *Type:* string

---

##### `smartCardLogonRequired`<sup>Required</sup> <a name="smartCardLogonRequired" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.smartCardLogonRequired"></a>

```typescript
public readonly smartCardLogonRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `trustedForDelegation`<sup>Required</sup> <a name="trustedForDelegation" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.trustedForDelegation"></a>

```typescript
public readonly trustedForDelegation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.dataAdUser.DataAdUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAdUserConfig <a name="DataAdUserConfig" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.Initializer"></a>

```typescript
import { dataAdUser } from '@cdktf/provider-ad'

const dataAdUserConfig: dataAdUser.DataAdUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.userId">userId</a></code> | <code>string</code> | The user's identifier. It can be the group's GUID, SID, Distinguished Name, or SAM Account Name. |
| <code><a href="#@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user#id DataAdUser#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The user's identifier. It can be the group's GUID, SID, Distinguished Name, or SAM Account Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user#user_id DataAdUser#user_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.dataAdUser.DataAdUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/data-sources/user#id DataAdUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



